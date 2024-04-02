import React from "react";
import { Link } from "react-router-dom";
import rightplace from "../assets/rightplace.png";

function RignPlacePage() {
  return (
    <div className="flex flex-col justify-center  items-center mt-16">
      <div className="w-[80%] bg-[#e6e6e6] h-1">
        <div className="h-1 w-3/5 border-b-4 border-[#3d9f86] rounded-2xl mb-5 "></div>
      </div>

      <div className="flex flex-col md:flex-row my-[50px]  place-content-center px-[10%] ">
        <div className="md:w-[50%] ">
          <img src={rightplace} alt="rightplace" />
        </div>
        <div className="md:w-[50%] md:my-[250px]">
          <h1 className="text-5xl font-bold text-stone-700 mb-4">
            You're in the right place
          </h1>
          <p className="text-base text-gray-700">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>

      <div className="max-w-7xl w-full  p-8 text-center">
        <Link to="/mathform">
          <button className="hover:bg-black bg-gray-400 text-white px-[50px] py-[10px] md:px-[56px] font-bold rounded-xl md:py-[18px]">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RignPlacePage;
