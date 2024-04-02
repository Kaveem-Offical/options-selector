import React from "react";
import Final from "./Final";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function LearningPath() {
  const navigate = useNavigate();
  setTimeout(function () {
    console.log("Loading");
    navigate("/final");
  }, 5000);
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex text-center justify-center">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <div>
        <h1 className="font-extrabold text-2xl text-center m-10">
          Finding learning path recommedations for you based on your responses
        </h1>
      </div>
    </div>
  );
}

export default LearningPath;
