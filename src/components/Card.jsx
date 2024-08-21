import React from "react";

const Card = (props) => {
  return (
    <div
      className={`w-full text-center shadow-lg flex-col p-4 my-4 rounded-lg 
      hover:border-2 border-[#a6a4f8] ${props.divStyle}`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={props.src}
        alt="/"
      />
      <h2 className="text-2xl font-bold py-8">{props.heading}</h2>
      <p className="text-4xl font-bold">{props.pTitle}</p>
      <div className="font-medium">
        <p className="py-2 border-b mx-8 mt-8">{props.info1}</p>
        <p className="py-2 border-b mx-8">{props.info2}</p>
        <p className="py-2 border-b mx-8">{props.info3}</p>
      </div>
      <button
        className="bg-[black] text-[#a6a4f8] w-[200px] rounded-md
            my-6 mx-auto md:mx-0 py-3 text-2xl hover:text-[black] hover:bg-[#9c7ff4] hover:border-2 border-black"
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
