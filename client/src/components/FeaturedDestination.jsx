import React from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";

const FeaturedDestination = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 px-6 py-20 md:px-16 lg:px-24">
      <Title
        title="Featured Destination"
        subTitle="Your next adventure awaits: Browse exceptional hotels in our most popular and unique destinations."
      />
      <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
