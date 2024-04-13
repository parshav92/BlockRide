import { useState } from "react";
import { useContext } from "react";
import { UberContext } from "../context/uberContext";
import RideSelector from "./RideSelector";

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");
  const { pickup, setPickup, dropoff, setDropoff } = useContext(UberContext);

  return (
    <div className="pt-2 md:pt-4 lg:pt-6">
      <div className="w-full font-bold text-left flex items-center text-2xl md:text-3xl p-4 overflow-hidden">
        {inFocus === "from" ? "Where can we pick you up?" : "Where to?"}
      </div>
      <div className="flex flex-col mb-4 relative">
        <div
          className={`h-10 mx-2 md:mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "from" && "border-black"
          }`}
        >
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className="my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full text-sm md:text-base"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setInFocus("from")}
          />
        </div>
        <div className="w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem] md:left-[2.5rem]" />
        <div
          className={`h-10 mx-2 md:mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "to" && "border-black"
          }`}
        >
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
              />
            </svg>
          </div>
          <input
            className="my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full text-sm md:text-base"
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={() => setInFocus("to")}
          />
        </div>
      </div>
      {/* <RideSelector /> */}
    </div>
  );
};

export default LocationSelector;
