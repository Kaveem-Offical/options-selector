import React from "react";
import math from "../assets/foundationalmath.png";

function Final() {
  return (
    <div className="place-content-center md:grid h-screen">
      <div>
        <h1 className="font-extrabold text-4xl mb-5 text-center">
          Learning paths based on your answers
        </h1>
        <p className="text-gray-500 text-center">
          Choose one to get started. You can switch anytime
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center text-centere">
        <button className="flex flex-col md:flex-row mx-4 rounded-xl mb-5 p-4 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]">
          <p className="text-xl md:w-[250px] pb-5 p-5 text-left">
            <strong>Foundational Math</strong> Build your foundational skills in
            algebra, geometry, and probability
          </p>
          <img src={math} alt="king" />
        </button>
        <button className="flex flex-col md:flex-row mx-4 rounded-xl mb-5 p-4 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]">
          <p className="text-xl md:w-[250px] pb-5 p-5 text-left">
            <strong>Mathematical Thinking</strong> Build your foundational
            skills in algebra, geometry, and probability
          </p>
          <img src={math} alt="king" />
        </button>
      </div>
    </div>
  );
}

export default Final;
