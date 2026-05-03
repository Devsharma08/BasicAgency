import { useState, useRef, useEffect } from "react";
import DragCursor from "../utils/dragComponent";

const resources = [
    {
        link: "/featuredEn1.webp",
        heading: "google",
        text: "Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.",
    },
    {
        link: "/featuredEn2.webp",
        heading: "kfc",
        text: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences.",
    },
    {
        link: "/featuredEn3.webp",
        heading: "wilson",
        text: "A reimagining of Wilson's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location.",
    },
    {
        link: "/featuredEn4.webp",
        heading: "at&t",
        text: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for consumers.",
    },
    {
        link: "/featuredEn5.webp",
        heading: "patagonia",
        text: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers.",
    },
];

const FeaturedEngagements = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [inside, setInside] = useState(false);
    const [mouseDrag, setMouseDrag] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setMouseDrag(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setMouseDrag(false);
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 0.7;
        scrollRef.current.scrollLeft = scrollLeft - walk;
        handleProgress()
    };

    const handleProgress = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            let num = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setProgress(num);
        }
    }

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener('scroll', handleProgress);
        return () => el.removeEventListener('scroll', handleProgress)
    }, [])

    return (
        <section
            className={`pl-6 md:pl-16 py-20 ml-4rem overflow-x-hidden relative ${inside ? "cursor-none" : ""}`}
            onMouseLeave={() => setInside(false)}
            onMouseEnter={() => setInside(true)}
        >
            {inside && <DragCursor mouseDrag={mouseDrag} />}

            <div className="flex flex-wrap border-t border-gray-200 pt-10">
                <h3 className="text-[4vw] font-extrabold tracking-widest uppercase leading-tight">
                    <span className="block lg:inline">FEATURED</span>
                    <span className="hidden lg:inline">&nbsp;</span>
                    <span className="block lg:inline">ENGAGEMENTS</span>
                </h3>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    handleMouseUp();
                    setInside(false);
                }}
                className="mt-12 flex flex-nowrap select-none overflow-x-hidden gap-x-12 cursor-grab active:cursor-grabbing"
            >
                {resources.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] flex-shrink-0 flex flex-col space-y-6"
                    >
                        <img
                            src={item.link}
                            className="w-[120px] h-[45px] object-contain pointer-events-none"
                            alt={`${item.heading} logo`}
                        />
                        <hr className="w-8 border-black" />

                        <div className="space-y-4">
                            <h3 className="text-2xl uppercase font-bold tracking-tighter">{item.heading}</h3>
                            <p className="text-sm md:text-base lg:font-[500] font-serif leading-relaxed max-w-sm">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 h-[2px] mr-[4rem] w-full bg-gray-200 overflow-hidden relative">
                <div
                    className="h-full bg-black transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </section>
    );
};

export default FeaturedEngagements;
