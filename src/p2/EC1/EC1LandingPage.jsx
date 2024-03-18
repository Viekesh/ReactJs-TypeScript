import React from 'react';
import BottomNavigation from '../../MainComponents/Navigation/BottomNavigation';
import TopNavigation from '../../MainComponents/Navigation/TopNavigation';
import PortfolioLinks from '../../MainComponents/PorfolioLinks/PortfolioLinks';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
import Hero from './Components/Main/Hero';
import Product from './Components/Products/Product';
import Slider from './Components/Slider/Slider';
import Testimonial from './Components/Testimonial/Testimonial';
import Virtual from './Components/Virtual/Virtual';
import "./Styles/EC1LandingPage.scss";

const EC1LandingPage = () => {
  return (
    <div className='EC1LandingPage'>
      <TopNavigation />
      <BottomNavigation />
      <PortfolioLinks />
      {/* <Header /> */}
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  )
}

export default EC1LandingPage;