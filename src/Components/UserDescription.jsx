import React, { useState } from "react";
import { Link } from "react-router-dom";
import student from "../assets/student.png";
import doctor from "../assets/doctor.png";
import parent from "../assets/parent.png";
import oldman from "../assets/oldman.png";
import teacher from "../assets/teacher.png";
import other from "../assets/other.png";

const UserDescriptionForm = () => {
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
    <div className=" flex flex-col justify-top items-center mt-16">
      <div className="w-[80%] bg-[#e6e6e6] h-1">
        <div className="h-1 w-1/5 border-b-4 border-[#3d9f86] rounded-2xl mb-5 "></div>
      </div>
      <div className="max-w-7xl w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-[#212121] mb-5">
          Which describes you best ?
        </h1>
        <p className="text-base text-gray-700">
          This will help us personalize your experience.
        </p>
      </div>
      <div className="max-w-7xl w-full text-center relative">
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={student}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Student
            <span className="text-gray-500">&nbsp; or soon to be enrolled</span>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={doctor}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Professional
            <span className="text-gray-500">&nbsp; pursuing a career</span>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={parent}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Parent
            <span className="text-gray-500">&nbsp; of a school-age child</span>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={oldman}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Lifelong learner
            <span className="text-gray-500">&nbsp; </span>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={teacher}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Teacher
            <span className="text-gray-500">&nbsp; </span>
          </button>
        </div>
        <div className="justify-center flex ">
          <button
            onClick={selectOption}
            className="flex flex-row w-[90%] py-2 px-5 text-left md:px-10 md:py-[27px] rounded-xl md:w-3/5 hover:outline hover:outline-2  hover:outline-[#e1d1b4] focus:outline-none focus:ring focus:ring-[#e1d1b4]"
          >
            <img
              src={other}
              alt="student"
              className="w-[30px] h-[30px] mr-5 "
            />
            Other
          </button>
        </div>
      </div>
      <div className="max-w-7xl w-full  p-8 text-center">
        <Link id="continue" to="/intrests">
          <button
            disabled={isDisabled}
            className={`  ${bgcolor} text-white px-[50px] py-[10px] md:px-[56px] font-bold rounded-xl md:py-[18px]`}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDescriptionForm;
