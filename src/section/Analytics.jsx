import React from "react";
import analytics from "../assets/data_analytics.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="analytics">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={analytics} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#a6a4f8] font-bold">Data Management</h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We Provide Various Data Management Solutions
          </h2>
          <p>
            Data management involves organizing, storing, and retrieving data
            effectively and efficiently. A database company can help businesses
            and organizations manage their data by providing services such as
            data modeling, data architecture design, and database
            administration.
          </p>
          <button
            className="bg-black text-[#a6a4f8] w-[200px] rounded-md
            my-6 mx-auto md:mx-0 py-3 text-2xl
          "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
