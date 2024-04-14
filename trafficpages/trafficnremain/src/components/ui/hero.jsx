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
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
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
    <div className="h-screen flex flex-col items-center justify-center relative">
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-black text-center font-sans">
          Welcome to block-ride
        </h1>
        <p className="lg:text-lg md:text-md sm:text-sm text-xs text-black text-center mt-4">
          Experience the future of decentralized transportation
        </p>
        <div className="flex items-center justify-center mt-16">
          <a
            className="mt-8 mr-4 bg-white font-bold bg-opacity-50 text-black px-4 py-2 rounded-lg text-sm backdrop-blur-md"
            href="https://block-ride.vercel.app"
          >
            Get Started
          </a>
          <button className="mt-8 bg-white font-bold bg-opacity-50 text-black px-4 py-2 rounded-lg text-sm backdrop-blur-md">
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
