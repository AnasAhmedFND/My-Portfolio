import React from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/About/About'
import Skil from '../Components/About/Skil'
import Education from '../Components/About/Education'
import Portfolio from '../Components/Portfolio/Portfolio'
import Service from '../Components/Services/Service'


const Home = () => {
  return (
    <div>
     <Hero />
     <About />
     <Skil />
     <Education />
     <Portfolio />
     <Service />
     
    </div>
  )
}

export default Home
