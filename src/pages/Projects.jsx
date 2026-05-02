import React, { useRef, useState } from 'react';

const Projects = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  
  const resources = [
        {
            type:'image',
            link:'/img1.webp',
            heading:'Patagonia',
            text:[
'An eCommerce experience driven by Patagonia’s brand mission']
        },
        {
            type:'image',
            link:'/img2.webp',
            heading:'Wilson',
            text:['A century-old sports brand finding its place in culture']
        },
        {
            type:'video',
            link:'/vid2.mp4',
            heading:'Google Store',
            text:['An eCommerce experience helping Google bring its hardware to people across the globe']
        },
  ]

  // Dragging Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX); 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full space-y-[7rem] py-20 ml-[2rem] overflow-x-hidden">
  
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex flex-nowrap gap-2 px-[32px] overflow-x-hidden select-none cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
      >
        {resources.map((item, index) => (
            <>
            <div key={index} className='flex flex-col space-y-[1rem] group'>
          <div 
             
            className="flex-shrink-0 w-[80vw] md:w-[450px] aspect-[4/5] bg-gray-200 overflow-hidden"
          >
            {item.type === 'image' ? (
              <img src={item.link} className="w-full h-full object-cover pointer-events-none" />
            ) : (
              <video muted autoPlay loop className="w-full h-full object-cover pointer-events-none">
                <source src={item.link} />
              </video>
            )}
          </div>
            <div className='space-y-1'>
                <h3 className='group-hover:underline uppercase transition-all duration-400 font-bold text-xl '>{item.heading}</h3>
                <p className='uppercase sm:max-w-[40%] md:max-w-[70%] md:text-sm lg:text-xs sm:text-md font-[380] leading-5 flex-wrap w-full text-md'>{item.text}</p>
            </div>
        </div>
        </>
        ))}
      </div>
      {/* line */}
      <div className=' flex flex-col mx-[2rem] '>
            <hr className='  border rounded-md w-full text-black' />
            <div className='flex font-[600] justify-between'>
                <p><span className='leading-2 text-sm'>
                    <span>00/</span>
                    <span className='block'>05</span>
                    </span>
                </p>
                <p>●</p>
            </div>
    </div>
    </section>
  );
};

export default Projects;