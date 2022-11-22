import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Main/Hero';
import Product from './Components/Products/Product';
import Slider from './Components/Slider/Slider';
import Testimonial from './Components/Testimonial/Testimonial';
import Virtual from './Components/Virtual/Virtual';
import "./Styles/EC1LandingPage.scss";

const EC1LandingPage = () => {
  return (
    <div className='EC1LandingPage'>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default EC1LandingPage;