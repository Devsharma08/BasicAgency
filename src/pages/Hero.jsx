import React, { useState } from "react";
import CustomCursor from "../utils/heroFollowerPointer";

const Hero = () => {
  const [mute, setMute] = useState(true);
  const [isSideNav,setIsSideNav] = useState(true);

  const [inside,setInside] = useState(false);
  const handleButtonClick = (e) => {
    e.preventDefault();
    if(!inside) return;
    setIsSideNav(prev=>!prev);
  }
  // dark #252422
  // pink #F9CDCD
  // bg #F2F2F2

  const links = ["Work","About","News","Thinking","Career","Contact","Initiatives"]
  return (
    <>
    {isSideNav ?
    <div style={{backgroundColor:'#252422',color:'#F9CDCD'}} className="w-full h-[100vh]">
        <nav className="flex flex-col absolute inset-0 justify-between py-[3rem] px-[4rem]">
          {/* heading */}
          <div className="flex mb-[5rem] justify-between">
            <div className="font-extrabold text-2xl ">BASIC/DEPT®</div>
            <div className="font-bold text-md ">
              <button className="" onClick={handleButtonClick}>╳</button>
            </div>
          </div>

          {/* list nav's */}
          <ul className="h-full space-y-[1rem] ">
            {links.map((item,index)=>(
              <li className="font-bold uppercase leading-8 text-2xl" key={index}>
                {item}
              </li>
            ))}
          </ul>

          {/* footer */}
          <footer className="flex text-xs text-gray-500 justify-between">
            <p>BASIC/DEPT®,INC</p>
            <p>10-26 &copy;</p>
          </footer>
        </nav>
    </div> : <section onMouseEnter={()=>setInside(true)} onMouseLeave={()=>setInside(false)} onClick={() => setMute(!mute)} className="relative">
        {/* heading */}
        <nav className="flex absolute inset-0 justify-between py-[3rem] text-white px-[4rem]">
            <div className="font-extrabold text-xl ">BASIC/DEPT®</div>
            <div className="font-bold text-md ">
              <button onClick={handleButtonClick}>MENU</button></div>
        </nav>
        {inside && <CustomCursor/>}
        <div 
          
          className="delay-[1200ms] cursor-none animate-in slide-in-from-bottom-full duration-1000 "
        >
          <video
            autoPlay
            muted={mute}
            playsInline
            className="hero-cursor-img pointer-events-none h-[100vh]  w-full -z-1 object-cover "
          >
            <source src="/vid3.mp4" type="video/mp4" />
          </video>
        </div>
      </section>}
      
    </>
  );
};

export default Hero;
