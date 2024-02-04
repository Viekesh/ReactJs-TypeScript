import { useState } from "react";
import "./Calculator.css";



const Calculator = () => {

    const [isLightMode, setIsLightMode] = useState();

    const convertDarkMode = () => {
        setIsLightMode(!isLightMode)
    }

    return (
        <>
            <section className="calculator">
                <div className="calc_nav"></div>
            </section>
        </>
    )
}



export default Calculator;