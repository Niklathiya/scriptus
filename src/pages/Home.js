import React from 'react'
import HeroSection from '../components/herosection/HeroSection'
import OwnCreation from '../components/owncreation/OwnCreation'
import Benefits from '../components/benefits/Benefits'
import Join from '../components/join/Join'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OwnCreation />
      <Benefits />
      <Join />
    </div>
  )
}

export default Home
