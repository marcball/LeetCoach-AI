import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "./components/Banner";


export default function App() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* MAIN SCREEN CONTENT */}
      <div className="flex flex-col items-center justify-center h-screen w-screen text-white">
        <h1 className="text-4xl font-bold text-white">
          LeetCoach AI
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Your personalized Leetcode Tutor.
          Learn leetcode the smart way.
        </p>
        <Link to="/problems/python/twosum"> {/* /data_structures -- CHANGE IT BACK TO THIS IF YOU EVER BEGIN WORKING ON IT AGAIN.*/}
          <button className="mt-4 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full">
            Get started
          </button>
        </Link>
      </div>
    </div>

  );
}

  