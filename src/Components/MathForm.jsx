import React, { useState } from "react";
import { Link } from "react-router-dom";

const MathForm = () => {
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
      {/* Border Progress Line */}
      <div className="w-[80%] bg-[#e6e6e6] h-1">
        <div className="h-1 w-4/5 border-b-4 border-[#3d9f86] rounded-2xl mb-5 "></div>
      </div>
      {/* Border Progress line Ends Here */}
      {/* Header */}
      <div className="max-w-7xl w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-[#212121] mb-5">
          Which are you most interested in ?
        </h1>
        <p className="text-base text-gray-700">
          Choose just one. This will help us get you started (but won't limit
          your experience)
        </p>
      </div>
      {/* Header ends Here */}
      <div className=" grid md:grid-cols-4 max-w-7xl w-full text-center justify-center relative">
        <button
          onClick={selectOption}
          className="justify-center w-[90%] m-5 py-5 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
        >
          <img src="" alt="graph" className="w-5px h-5" />
          <p>Arithmetic</p>
          <p className="text-gray-400">Introductory</p>
        </button>
        <button
          onClick={selectOption}
          className="justify-center w-[90%] py-5 m-5 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
        >
          <img src="" alt="graph" className="w-5px h-5" />
          <p>Basic Algebra</p>
          <p className="text-gray-400">Foundational</p>
        </button>
        <button
          onClick={selectOption}
          className="justify-center w-[90%] py-5 px-5 m-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
        >
          <img src="" alt="graph" className="w-5px h-5" />
          <p>Intermediate Algebra</p>
          <p className="text-gray-400">Intermediate</p>
        </button>
        <button
          onClick={selectOption}
          className="justify-center w-[90%] py-5 px-5 m-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
        >
          <img src="" alt="graph" className="w-5px h-5" />
          <p>Calculus</p>
          <p className="text-gray-400">Advance</p>
        </button>
      </div>
      {/* Continue Button */}
      <div className="max-w-7xl w-full  p-8 text-center">
        <Link to="/thoughts">
          <button
            disabled={isDisabled}
            className={`${bgcolor} text-white px-[50px] py-[10px] md:px-[56px] font-bold rounded-xl md:py-[18px]`}
          >
            Continue
          </button>
        </Link>
      </div>
      {/* Continue Button Ends Here */}
    </div>
  );
};

export default MathForm;
