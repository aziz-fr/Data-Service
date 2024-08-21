import React from "react";
import singleUser from "../assets/icons8-user-90.png";
import partneredUsers from "../assets/icons8-users-96.png";
import groupUsers from "../assets/icons8-users-group-96.png";
import Card from "../components/Card";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white" id="cards">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          src={singleUser}
          heading="Single User"
          pTitle="$20"
          info1="500GB storage"
          info2="1 granted user, no more storage"
          info3="Send up to 2GB"
        />
        <Card
          src={partneredUsers}
          divStyle="bg-gray-50"
          heading="Partnered User"
          pTitle="$80"
          info1="1TB storage"
          info2="Up to 4 granted users"
          info3="Send up to 20GB"
        />
        <Card
          src={groupUsers}
          heading="Multiple Users"
          pTitle="$200"
          info1="10TB storage"
          info2="Organization group of users"
          info3="Send up to 100GB"
        />
      </div>
    </div>
  );
};

export default Cards;
