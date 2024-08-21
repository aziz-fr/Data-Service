import React from "react";
import recovery from "../assets/data_recovery.png";

const Backup = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={recovery}
          alt="/"
          className="w-[500px] mx-auto my-4 block md:hidden"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#a6a4f8] font-bold">Data Backup and Recovery</h1>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We Ensure Our Client's Data Never Gets Lost
          </h2>
          <p>
            Data backup and recovery services help businesses and organizations
            protect their data from loss or damage due to hardware failure,
            natural disasters, or cyber-attacks. A database company can provide
            services such as data backup scheduling, data backup storage, and
            data recovery to help businesses and organizations recover their
            data in case of a data loss event.
          </p>
          <button
            className="bg-black text-[#a6a4f8] w-[200px] rounded-md
            my-6 mx-auto md:mx-0 py-3 text-2xl
          "
          >
            Get Started
          </button>
        </div>
        <img
          src={recovery}
          alt="/"
          className="w-[500px] mx-auto my-4 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Backup;
