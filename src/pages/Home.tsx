import React from "react";

import data from "../assets/dummyData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="left-0 z-100 pl-6 fixed w-64 h-screen border border-r-1 border-neutral-300">
          <div className="flex items-center gap-3 my-10 w-max">
            <img
              src="https://imgs.search.brave.com/VSGFyGJAWF806juSz49EQfafPYYbZ5istp41qqK1qzY/rs:fit:512:355:1/g:ce/aHR0cHM6Ly9kdW1i/d2F5cy5pZC9hc3Nl/dHMvaW1hZ2VzL2Jy/YW5kcmVkLnBuZw"
              alt="logo"
              className="w-12 h-auto"
            />
            <p className="text-xl text-black font-semibold">Dumbgram</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={solid("home")} className="w-6 h-6" />
            <p className="text-lg text-black font-medium antialiasing">Home</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              className="w-6 h-6"
            />
            <p className="text-lg text-black font-light antialiasing">Search</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("compass")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Explore
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("message")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Messages
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("heart")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Notification
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon
              icon={regular("square-plus")}
              className="w-6 h-6"
            />
            <p className="text-lg text-black font-light antialiasing">Create</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={solid("user")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Profile
            </p>
          </div>
        </div>
        <div className="relative w-[50vh] h-screen flex flex-col whitespace-nowrap overflow-scroll scrollbar-hide">

        </div>
      </div>
    </>
  );
}
