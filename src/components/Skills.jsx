import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[rgb(10,25,47)] text-gray-300"
    >
      {/* conatainer */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 ">
            {" "}
            // These are the technologies I've Worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={JavaScript} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={ReactImg} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={GitHub} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={Node} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={Mongo} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
            <img src={FireBase} alt="HTML icon" className="w-20 mx-auto " />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
