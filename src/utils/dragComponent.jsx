import React from "react";

const DragCursor = ({ mouseDrag = false }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed w-[7rem] h-[7rem] pointer-events-none rounded-full top-0 left-0 z-[999] 
                 flex items-center justify-center transition-all duration-300 ease-out
                 ${mouseDrag ? "scale-75 bg-pink-300/80" : "scale-100 bg-pink-200/60"}`}
      style={{
        transform: `translate(${position.x - 56}px, ${position.y - 56}px)`,
        transition: "transform 0.05s linear, scale 0.3s ease, background 0.3s ease",
      }}
    >
      {!mouseDrag ? (
        <p className="tracking-widest text-xl font-bold text-pink-900">DRAG</p>
      ) : (
        <>
          <span className="absolute -left-10 text-3xl font-extrabold text-pink-600">⫷</span>
          <span className="absolute -right-10 text-3xl font-extrabold text-pink-600">⫸</span>
        </>
      )}
    </div>
  );
};

export default DragCursor;