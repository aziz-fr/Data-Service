import React from "react";
import { Link } from "react-scroll";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-6 text-white" id="contact">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 flex w-full rounded-md text-xl text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="bg-[#a6a4f8] w-[240px] rounded-md
              my-6 ml-4 mx-auto py-2 text-black text-xl"
            >
              Notify Me
            </button>
          </div>
          <p>
            We care about your protection of the data: read our
            <span className="text-[#a6a4f8]">
              {" "}
              <Link
                className="cursor-pointer"
                to="policy"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
