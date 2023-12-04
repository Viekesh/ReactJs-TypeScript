import React, { useState } from "react";
import ThemePicker from "./Component/ThemePicker";
import Dashboard from "./Component/Dashboard";
import ThemeCtx from "./Component/CTX/ThemeCTX";
import UserCtx from "./Component/CTX/UserCTX";
import StatsCtx from "./Component/CTX/StatsCTX";
import "./ContextHook.css";
import RestaurantCard from "./Component/RestaurantCard";
import { dataSet } from "./DataSource";


const userData = {
    name: "Vincent K",
    lastLogged: new Date(2019, 11, 5)
};

const statsData = {
    aqi: 120,
    aqText: "Poor air quality. You may face breathing difficulties!"
};

const ContextHook = () => {

    const [theme, setTheme] = useState({
        backgroundColor: "rgba(255,255,255)",
        color: "rgb(0,0,0,0.95)"
    });

    return (
        <>
            <div className="container1">
                <ThemePicker onSetTheme={ruleset => setTheme(ruleset)} />
                <UserCtx.Provider value={userData}>
                    <ThemeCtx.Provider value={{ theme }}>
                        <StatsCtx.Provider value={statsData}>
                            <Dashboard />
                        </StatsCtx.Provider>
                    </ThemeCtx.Provider>
                </UserCtx.Provider>
            </div>

            <div className="container2">
                {dataSet.map(({ resId, resName,
                    resOpen,
                    resScore }) => (
                    <RestaurantCard
                        key={resId}
                        name={resName}
                        isOpen={resOpen}
                        score={resScore}
                    />
                ))}
            </div>
        </>
    )
};



export default ContextHook;
