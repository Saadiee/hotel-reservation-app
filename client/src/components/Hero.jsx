import React from "react";
import { assets, cities } from "../assets/assets.js";

const Hero = () => {
  return (
    <div className='flex h-screen flex-col items-start justify-center bg-[url("/src/assets/heroImage.png")] bg-cover bg-center bg-no-repeat px-6 text-white md:px-16 lg:px-24 xl:px-32'>
      <p className="mt-40 rounded-full bg-[#49b9ff]/50 px-3.5 py-1">
        The Ultimate Hotel Experience
      </p>
      <h1 className="font-playfair mt-4 max-w-xl text-2xl font-bold md:text-5xl md:text-[56px] md:leading-[56px] md:font-extrabold">
        Discover Your Perfect Gateway Destincation
      </h1>
      <p className="mt-2 max-w-130 text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam
        quo dignissimos, facere vitae maiores.
      </p>

      <form className="mt-8 flex flex-col gap-4 rounded-lg bg-white px-6 py-4 text-gray-500 max-md:mx-auto max-md:items-start md:flex-row">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calender icon"
              className="h-4"
            />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calender icon"
              className="h-4"
            />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calender icon"
              className="h-4"
            />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex max-md:items-center max-md:gap-2 md:flex-col">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="mt-1.5 max-w-16 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
            placeholder="0"
          />
        </div>

        <button className="my-auto flex cursor-pointer items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-white max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="search icon" className="h-7" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
