import React from "react";
import NewsList from "../utils/cards";

const FeaturedNews = ({ dark }) => {
  const isDark = dark === "dark";

  return (
    <section className="w-full h-full px-[2rem]">
      <div className="flex mb-[3rem] justify-between items-end">
        <div className="flex flex-wrap border-t border-gray-200 pt-10">
          <h3 className="text-[4vw] font-extrabold tracking-widest uppercase leading-tight">
            <span className="block lg:inline">FEATURED</span>
            <span className="hidden lg:inline">&nbsp;</span>
            <span className="block lg:inline">NEWS</span>
          </h3>
        </div>

        <div
          className={`relative font-bold border rounded-full overflow-hidden group h-fit w-fit transition-colors duration-300 
          ${isDark ? "border-[#F9CDCD]" : "border-black"}`}
        >
          <span
            className={`absolute left-0 right-0 bottom-0 z-0 transition-all duration-400 h-0 group-hover:h-full 
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
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="h-full w-full">
        <NewsList />
      </div>
    </section>
  );
};

export default FeaturedNews;
