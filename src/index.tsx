import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// React Router DOM is a declarative routing library for ReactJS. It makes it easy to create single-page 
// applications(SPAs) with dynamic routes and navigation.

// BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and
// popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other
// components.

// Routes is a new component introduced in v6 of React Router. It is a wrapper for the Route component that 
// allows you to group route together and provide them with common props.

// Route is a component that renders a specific component when the current URL matches its path prop.



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
