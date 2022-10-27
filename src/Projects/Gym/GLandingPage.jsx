import React from 'react'
import Navigation from './Components/Navigation/Navigation';
import Slider from './Components/Slider/Slider';

const GLandingPage = () => {
  return (
    <div className='gym_landing_page'>
        <Navigation />
      <header>
        <Slider />
      </header>
    </div>
  )
}

export default GLandingPage;