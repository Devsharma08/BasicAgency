import React from "react";

const Connect = ({ theme }) => {
  // Define your colors clearly to avoid template literal issues with Tailwind
  const isDark = theme === "dark";

  return (
    <section className="w-full relative lg:items-start lg:space-x-[4vw] my-[3rem] lg:flex-row-reverse flex flex-col space-y-[3vw] gap-[2rem] px-[4vw]">
      {/* video side */}
      <div className="w-full mt-[1rem] h-full mx-auto lg:min-w-[50%]">
        <video
          className="flex pointer-events-none flex-shrink-0 object-cover h-full w-full"
          autoPlay
          playsInline
          loop
          muted
        >
          <source type="video/mp4" src="/vid1.mp4" />
        </video>
      </div>

      {/* text side */}
      <article className="lg:sticky lg:top-5 lg:w-1/2 h-fit space-y-[4vh] flex flex-col">
        <p className="w-full uppercase font-extrabold md:text-[5vw] md:leading-[1.1] text-5xl leading-tight">
          BASIC/DEPT® helps brands ● connect w/ culture
        </p>

        <h2 className="text-2xl font-light uppercase">
          Adweek <span className="font-medium">Agency Spotlight</span>
        </h2>

        {/* Button Logic */}
        <div
          className={`relative font-bold border rounded-full overflow-hidden group h-fit w-fit transition-colors duration-300 ${isDark ? "border-[#F9CDCD]" : "border-black"}`}
        >
         
          <span
            className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out h-0 group-hover:h-full top-0 left-0 
        ${isDark ? "bg-[#F9CDCD]" : "bg-black"}`}
          ></span>

          <button
            className={`relative z-10 px-8 py-3 transition-colors duration-300 uppercase
        ${
          isDark
            ? "text-[#F9CDCD] group-hover:text-[#252422]"
            : "text-black group-hover:text-white"
        }`}
          >
            ABOUT US
          </button>
        </div>
      </article>
    </section>
  );
};

export default Connect;
