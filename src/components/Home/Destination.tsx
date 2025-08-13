import React from "react";
import './destination.css'
import Destination_cards from "../../extra/Destination_cards";

const Destination: React.FC = () => {
  return (
    <div className=" border-cyan-500 p-4 flex flex-col gap-5 my-8">
      <div className="">
        <p className="text-center destination_heading text-7xl">Popular Destinations</p>
      </div>
      <div className="">
        <p className="text-center destination_body text-lg">
          Discover the world's most amazing places. From bustling cities to
          serene beaches,<br /> <span>find your perfect getaway.</span>
        </p>
      </div>
      <div className=" my-8 w-fit relative left-1/4">
        <Destination_cards/>
      </div>
    </div>
  );
};

export default Destination;
