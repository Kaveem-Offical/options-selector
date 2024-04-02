import React from "react";
import { Link } from "react-router-dom";
import thought from "../assets/thought.png";

function Thoughts() {
  return (
    <div className="flex flex-col justify-center  items-center mt-16">
      <div className="w-[80%] bg-[#e6e6e6] h-1">
        <div className="h-1 w-5/5 border-b-4 border-[#3d9f86] rounded-2xl mb-5 "></div>
      </div>

      <div className="flex flex-col md:flex-row my-10  place-content-center px-[10%] ">
        <div className="md:w-[50%] mb-10">
          <img src={thought} alt="rightplace" />
        </div>
        <div className="md:w-[50%] md:mt-[250px]">
          <h1 className="text-5xl font-bold text-stone-700 mb-4">
            You're on your way
          </h1>
          <p className="text-base text-gray-700">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations." — Jacob S.
          </p>
        </div>
      </div>

      <div className="max-w-7xl w-full md:m-[-100px] p-8 text-center">
        <Link to="/learningpath">
          <button className="hover:bg-black bg-gray-500 text-white px-[50px] py-[10px] md:px-[56px] font-bold rounded-xl md:py-[18px]">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Thoughts;
