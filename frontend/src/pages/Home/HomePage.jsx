import React, { useState } from 'react'
import Hero from "../../components/Hero";

import About from "../../components/About";

import BackToTopBtn from '../../components/BackToTopBtn'
import WhyUs from '../../components/WhyUs'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay'
import Footer from '../../components/Footer'

const HomePage = () => {
    const [category, setCategory] = useState('All');
  return (
    <div>
         <Hero />
      <main id='main'>
        <About />
      </main>
       <BackToTopBtn />
       <WhyUs />
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <Footer />
    </div>
  )
}

export default HomePage