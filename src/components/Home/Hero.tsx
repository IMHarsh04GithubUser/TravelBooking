import React from 'react'
import './Hero.css'

const Hero:React.FC = () => {
  return (
    <div className='hero_container border border-black bg-black text-white'>
        <div className="flex flex-col gap-6 p-4 my-34">
            <div className="overflow-hidden">
                <p className='hero_heading text-center text-7xl'>Discover Your Next Adventure</p>
            </div>
            <div className="">
                <p className='text-center text-2xl'>Book Flights, Hotels and complete Travel Packages at the best prices.<br/> <span>Your journey starts here.</span></p>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default Hero
