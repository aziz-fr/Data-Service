import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white flex justify-center" id="hero">
      <div
        className="max-w-[800px] mt-22 w-full h-screen text-center
      flex flex-col justify-center"
      >
        <p className="uppercase text-[#a6a4f8] font-bold p-2 md:text-xl text-sm">
          Growing with data analytics
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
          Manage your data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text 5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible data
          </p>
          <Typed
            className="md:text 5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["managament", "backup", "security"]}
            typeSpeed={130}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Monitor your data!
        </p>
        <button
          className="bg-[#a6a4f8] w-[200px] rounded-md
          my-6 mx-auto py-3 text-black text-2xl hover:bg-[#7371ef]"
        >
          <Link to="cards" spy={true} smooth={true} offset={-20} duration={500}>
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
