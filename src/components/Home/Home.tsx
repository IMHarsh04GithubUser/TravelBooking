import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from './Hero'
import Destination from './Destination'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destination />
    </div>
  )
}

export default Home
