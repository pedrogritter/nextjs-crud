import Link from "next/link";
import React from "react";

const Hero = () => (
  //   <div className="h-screen bg-gradient-to-b from-red-500 to-black p-24 flex flex-col justify-center items-center">
  <div>
    <div className="absolute w-full py-18">
      <img
        className="rounded-lg object-cover"
        src="https://cdn1.epicgames.com/ue/product/Screenshot/4a-1920x1080-a7691befb6390dbf2969f271c17356f2.png?resize=1&w=1920"
        alt="image"
      />
    </div>
    <div className="w-full h-screen backdrop-filter backdrop-blur-md flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl font-bold">
        THE ULTIMATE FIGHTING WARRIORS
      </h1>
      <p className="text-white">
        Discover the world of fighting with the best martial artists that ever
        walked the face of the earth
      </p>

      <Link href="/characters">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-5 py-2 px-4 border border-gray-400 rounded shadow">
          View All Fighters
        </button>
      </Link>
    </div>
  </div>
);
export default Hero;
