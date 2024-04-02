import React, { useState } from "react";
import { Link } from "react-router-dom";
import graph from "../assets/graph.png";
import earth from "../assets/earth.png";
import refresh from "../assets/refresh.png";
import target from "../assets/target.png";
import eyes from "../assets/eyes.png";

const UserInterestedForm = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [bgcolor, setBgColor] = useState("bg-gray-300");

  function selectOption(option) {
    console.log(option.target.innerText);
    const text = option.target.innerText;
    if (text == null) {
      console.log("Please Select an Option");
    } else {
      setDisabled(false);
      setBgColor("bg-black");
    }
  }
  return (
    <div className=" flex flex-col flex-wrap justify-top items-center mt-16">
      <div className="w-[80%] bg-[#e6e6e6] h-1">
        <div className="h-1 w-2/5 border-b-4 border-[#3d9f86] rounded-2xl mb-5 "></div>
      </div>
      <div className="max-w-7xl w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-[#212121] mb-5">
          Which are you most interested in ?
        </h1>
        <p className="text-base text-gray-700">
          Choose just one. This will help us get you started (but won't limit
          your experience)
        </p>
      </div>
      <div className="max-w-7xl w-full text-center relative">
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={graph}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            <p>Learning specific skills to advance my career</p>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img src={earth} alt="earth" className="w-[30px] h-[30px] mr-5 " />
            <p>Exploring new topics I'm intreasted in</p>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={refresh}
              alt="refresh"
              className="w-[30px] h-[30px] mr-5 "
            />
            <p>Refreshing my math foundations</p>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={target}
              alt="target"
              className="w-[30px] h-[30px] mr-5 "
            />
            <p>Exercising my brain to stay sharp</p>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img src={eyes} alt="student" className="w-[30px] h-[30px] mr-5 " />
            <p>Something else</p>
          </button>
        </div>
      </div>
      <div className="max-w-7xl w-full  p-8 text-center">
        <Link to="/rightplace">
          <button
            disabled={isDisabled}
            className={`${bgcolor} text-white px-[50px] py-[10px] md:px-[56px] font-bold rounded-xl md:py-[18px]`}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserInterestedForm;
