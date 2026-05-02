import React from "react";
import { useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });


  React.useEffect(() => {
      const move = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div 
      className="fixed w-[7rem] h-[7rem] top-0 flex flex-col space-y-[5px] items-center justify-center left-0 z-[999]"
      style={{ 
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: 'transform 0.1s ease-out' 
      }}
    >
        <p className="flex w-[5rem] font-bold text-md h-[5rem] items-center justify-center bg-white rounded-full  pointer-events-none flex-col items-center">
            <span>Watch</span>
            <span>Reel</span>
        </p>

        <h4 className="font-bold flex w-[3rem] justify-center text-[10px] text-center">
            BASIC/DEPT® 2010-
        </h4>
        
    </div>
  );
};

export default CustomCursor;