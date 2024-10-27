"use client";

import React, { useState } from "react";
import News from "./News";
import Helpline from "./Helpline";
import AboutTeam from "./AboutTeam";
import About from "./About";

const Cards = () => {
  const [activeSection, setActiveSection] = useState(null);

  {
    /* Function to handle opening a section */
  }
  const openSection = (section) => {
    setActiveSection(section);
  };

  {
    /* Function to handle closing the section */
  }
  const closeSection = () => {
    setActiveSection(null);
  };

  return (
    <div className="p-4">
      {/* Main Content */}
      {!activeSection ? (
        <div>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Weather Section - 1st Column */}
            <div className="col-span-1 bg-gray-200 flex justify-center items-center p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">19°</p>
                <p className="text-sm md:text-base">West Bengal, India</p>
                <p className="text-xs md:text-sm text-gray-600">
                  Storm & Heavy Shower
                </p>
              </div>
            </div>

            {/* 2nd Column - 2x2 Grid for News, Helpline, About Team, and About Project */}
            <div className="grid grid-rows-2 grid-cols-2 gap-4 col-span-1">
              {/* News Section */}
              <div
                className="bg-red-400 text-white flex justify-center items-center p-4 md:p-6 rounded-lg shadow-md cursor-pointer h-32"
                onClick={() => openSection("news")}
              >
                <div className="text-center">
                  <h2 className="text-lg md:text-xl font-bold">News</h2>
                </div>
              </div>

              {/* Helpline Section */}
              <div
                className="bg-blue-400 text-white flex justify-center items-center p-4 md:p-6 rounded-lg shadow-md cursor-pointer h-32"
                onClick={() => openSection("helpline")}
              >
                <div className="text-lg md:text-xl font-bold">HELPLINE</div>
              </div>

              {/* About Team Section */}
              <div
                className="bg-green-300 text-black flex justify-center items-center p-4 md:p-6 rounded-lg shadow-md cursor-pointer h-32"
                onClick={() => openSection("team")}
              >
                <div className="text-lg md:text-xl font-bold">About Team</div>
              </div>

              {/* About Project Section */}
              <div
                className="bg-gray-200 text-black flex justify-center items-center p-4 md:p-6 rounded-lg shadow-md cursor-pointer h-32"
                onClick={() => openSection("about")}
              >
                <div className="text-lg md:text-xl font-bold">About</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-white flex flex-col overflow-y-auto">
          {/* Render Component Based on Active Section */}
          {activeSection === "news" && <News closeSection={closeSection} />}
          {activeSection === "helpline" && (
            <Helpline closeSection={closeSection} />
          )}
          {activeSection === "team" && (
            <AboutTeam closeSection={closeSection} />
          )}
          {activeSection === "about" && <About closeSection={closeSection} />}
        </div>
      )}
    </div>
  );
};

export default Cards;