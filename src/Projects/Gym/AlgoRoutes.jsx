import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './Landing';
import '../Common.css';

const AlgoRoutes = () => {
    return (
        <div className='algo-routes'>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
            </Routes>
        </div>
    )
}

export default AlgoRoutes;
