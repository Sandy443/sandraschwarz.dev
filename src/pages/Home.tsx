import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <Header />
        <Hero />
        <TechStack />
        <Experiences />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home;