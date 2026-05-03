import React from "react";

const Connect = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section className="w-full my-[3rem] px-[4vw]">
      <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:gap-[4vw] gap-[2rem]">
        {/* Video side — tall enough to create scroll room for the sticky text */}
        <div className="w-full mt-[0.8rem] lg:w-[55%] flex-shrink-0">
          <video
            className="w-full lg:h-full object-cover pointer-events-none"
            autoPlay
            playsInline
            loop
            muted
          >
            <source type="video/mp4" src="/vid1.mp4" />
          </video>
        </div>

        {/* Text side — sticks while video scrolls past */}
        <article className="lg:sticky lg:top-[.6rem] lg:w-[45%] self-start space-y-[4vh] flex flex-col">
          <p className="w-full uppercase font-extrabold md:text-[5vw] md:leading-[1.1] text-5xl leading-tight">
            BASIC/DEPT® helps brands ● connect w/ culture
          </p>

          <h2 className="text-2xl font-light uppercase">
            Adweek <span className="font-medium">Agency Spotlight</span>
          </h2>

          <div
            className={`relative font-bold border rounded-full overflow-hidden group h-fit w-fit transition-colors duration-300 ${isDark ? "border-[#F9CDCD]" : "border-black"}`}
          >
            <span
              className={`absolute left-0 right-0 bottom-0 z-0 transition-all duration-500 ease-in-out h-0 group-hover:h-full 
              ${isDark ? "bg-[#F9CDCD]" : "bg-black"}`}
            ></span>

            <button
              className={`relative z-10 px-8 py-3 cursor-pointer transition-colors duration-300 uppercase
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
      </div>
    </section>
  );
};

export default Connect;
