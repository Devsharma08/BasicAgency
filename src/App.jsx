import React, { useCallback, useRef, useState, useEffect } from 'react'

import Hero from './pages/Hero'
import PreLoad from './pages/PreLoad'
import Awards from './pages/Awards'
import FeaturedWork from './pages/FeaturedWork'
import Projects from './pages/Projects'
import FeaturedEngagements from './pages/FeaturedEngagements'
import Connect from './pages/Connect'
import FeaturedNews from './pages/FeaturedNews'
import Footer from './pages/Footer'

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showHero, setShowHero] = useState(false);
  const darkThemeRef = useRef(null);

  const handlePreloadFinish = useCallback(() => {
    setShowHero(true);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
      rootMargin: '-50% 0px -50% 0px'
    });

    if (darkThemeRef.current) {
      observer.observe(darkThemeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`transition-colors duration-600 ease-in-out min-h-screen overflow-x-hidden ${
      theme === "dark" ? 'bg-[#252422] text-[#F9CDCD]!' : 'bg-[#F2F2F2] text-black!'
    }`}>
      <PreLoad onFinish={handlePreloadFinish} />
      <Hero showHero={showHero} />
      <Awards />
      <FeaturedWork />
      <Projects />
      <FeaturedEngagements />
      <div ref={darkThemeRef} data-theme="dark" className='w-full h-full'>
        <Connect theme={theme} />
      </div>
      <FeaturedNews dark={theme} />
      <Footer />
    </div>
  )
}

export default App