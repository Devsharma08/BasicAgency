import React from 'react'
import Hero from './pages/Hero'
import PreLoad from './pages/PreLoad'
import Awards from './pages/Awards'
import FeaturedWork from './pages/FeaturedWork';
import Projects from './pages/Projects';
import FeaturedEngagements from './pages/FeaturedEngagements';
const App = () => {
  return (
    <div>
      <PreLoad/>
      <Hero/>
      <Awards/>
      <FeaturedWork/>
      <Projects/>
      <FeaturedEngagements/>
    </div>
  )
}

export default App