import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Main/Hero';
import "./Styles/EC1LandingPage.scss";

const EC1LandingPage = () => {
  return (
    <div className='EC1LandingPage'>
      <Header />
      <Hero />
    </div>
  )
}

export default EC1LandingPage;