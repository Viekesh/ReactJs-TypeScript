import React from 'react';
import Spiner from "../EC2Images/Spinner.svg";
import "../Styles/Spinner.scss";

const Spinner = () => {
  return (
    <div className='spinner'>
        <div className="svg_spinner">
            <img src={Spiner} alt="Loading..." />
        </div>
    </div>
  )
}

export default Spinner;