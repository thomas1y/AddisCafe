import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BackToTopBtn from './components/BackToTopBtn'
import WhyUs from './components/WhyUs'
import ExploreMenu from './components/ExploreMenu'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id='main'>
        <About />
      </main>
      <BackToTopBtn />
      <WhyUs />
      <ExploreMenu />
    </div>
  )
}

export default App