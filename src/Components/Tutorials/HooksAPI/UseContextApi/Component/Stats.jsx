import React, { useContext } from "react";
import StatsCTX from "./CTX/StatsCTX";

const Stats = () => {

    const { aqi, aqText } = useContext(StatsCTX);

    return (
        <div className="stats">
            <div className="air-quality-ring">
                <h5 className="aq-title">AIR QUALITY</h5>
                <h1 className="aq-num">{aqi}</h1>
                <h4 className="aq-quality">{aqText}</h4>
            </div>
        </div>
    );
};

export default Stats;
