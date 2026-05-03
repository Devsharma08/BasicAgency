import React, { useState } from "react";
import CustomCursor from "../utils/heroFollowerPointer";

const Hero = ({ showHero }) => {
  const [mute, setMute] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inside, setInside] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const links = [
    "Work",
    "About",
    "News",
    "Thinking",
    "Career",
    "Contact",
    "Initiatives",
  ];

  return (
    <>
      {/* Fullscreen side-nav overlay */}
      <div
        style={{ backgroundColor: "#252422", color: "#F9CDCD" }}
        className={`fixed inset-0 z-[1000] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col absolute inset-0 justify-between py-[3rem] px-[4rem]">
          <div className="flex mb-[5rem] justify-between">
            <div className="font-extrabold text-2xl">BASIC/DEPT®</div>
            <div className="font-bold text-md">
              <button className="cursor-pointer" onClick={handleMenuClick}>
                ╳
              </button>
            </div>
          </div>

          <ul className="h-full space-y-[1rem]">
            {links.map((item, index) => (
              <li
                className="font-bold uppercase leading-8 text-2xl"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>

          <footer className="flex text-xs text-gray-500 justify-between">
            <p>BASIC/DEPT®, INC</p>
            <p>10-26 &copy;</p>
          </footer>
        </nav>
      </div>

      {/* Hero section with video */}
      <section
        onMouseEnter={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
        className={`relative overflow-hidden ${inside ? "cursor-none" : ""}`}
      >
        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between py-[3rem] text-white px-[4rem]">
          <div className="font-extrabold text-xl cursor-default">
            BASIC/DEPT®
          </div>
          <div className="font-bold text-md">
            <button
              className={`cursor-pointer ${inside ? "cursor-none" : ""}`}
              onClick={handleMenuClick}
            >
              MENU
            </button>
          </div>
        </nav>

        {inside && <CustomCursor />}

        <div
          onClick={() => setMute((prev) => !prev)}
          className={`${
            showHero
              ? "animate-in slide-in-from-bottom-full duration-1000"
              : "translate-y-full"
          }`}
        >
          <video
            autoPlay
            muted={mute}
            playsInline
            className="pointer-events-none h-[100vh] w-full -z-1 object-cover"
          >
            <source src="/vid3.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
