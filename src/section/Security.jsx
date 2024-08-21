import React from "react";
import security from "../assets/data_security.png";

const Security = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={security} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#a6a4f8] font-bold">Database Security</h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We Value And Protect Our Client's Data
          </h2>
          <p>
            Database security services help businesses and organizations protect
            their data from unauthorized access, data breaches, and
            cyber-attacks. A database company can provide services such as
            database security assessments, database security audits, and
            database security solutions to help businesses and organizations
            ensure that their data is secure and protected.
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

export default Security;
