import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import GLandingPage from './GLandingPage';
import "../../App.css";

const GymRoutes = () => {
  return (
    <div className='gym_routes'>
        <Navigation />
        <Routes>
            <Route exact path="/GLandingPage" element={<GLandingPage />}></Route>
        </Routes>
    </div>
  )
}

export default GymRoutes;