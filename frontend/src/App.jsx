import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero'
import About from './components/Navbar/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id='main'>
        <About />
      </main>
    </div>
  )
}

export default App