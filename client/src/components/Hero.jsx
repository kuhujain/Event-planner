import React from "react";
import Background from "../assets/Background.jpg";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] relative h-200 flex justify-center items-center">
        <img src={Background} alt="" className="absolute -z-1 opacity-80 h-300" />

        <div className="grid gap-20 justify-items-center  from-amber-200/40 to-red-200/40 rounded-xl p-10 w-3/4">
          <h1 className="text-9xl font-black font-[family-name:var(--customFont)]  text-center  bg-center bg-contain bg-clip-text text-transparent  p-3">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="rounded px-5 py-3 text-black bg-white hover:bg-blue-50">Book Now</button>
          <button className="rounded px-5 py-3 text-black-500 border-3 border-white hover:bg-blue-50 hover:text-black">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;