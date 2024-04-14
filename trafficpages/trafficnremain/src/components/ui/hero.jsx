"use client";
const { cn } = require("../../app/utils/cn.js");
const React = require("react");
const { useEffect, useRef, useState } = React;
const { createNoise3D } = require("simplex-noise");

const Hero = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors || [
    "#6c757d",
    "#495057",
    "#343a40",
    "#212529",
    "#ced4da",
  ];
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "white";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-500 to-neutral-900">
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="flex flex-row gap-2 md:gap-4">
          <img src="logo.svg" className="" />
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-900 text-center mt-3 md:mt-1">
            BLOCKRIDE
          </h1>
        </div>
        <p className="lg:text-lg md:text-md sm:text-sm text-lg text-gray-900 text-center mt-4">
          Experience the future of decentralized transportation
        </p>
        <div className="flex items-center justify-center md:mt-16 flex-col md:flex-row">
          <a
            className="mt-8 mr-4 border-2 border-gray-600 font-semibold text-gray-900 px-4 py-3 rounded-md text-xl md:text-lg"
            href="https://block-ride.vercel.app"
          >
            Get Started
          </a>
          <button className="mt-8 bg-gray-900 font-semibold text-gray-200 px-4 py-3 rounded-md text-xl md:text-lg">
            Download our App
          </button>
        </div>
      </div>
      <div className={cn("relative z-20", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

module.exports = { Hero };
