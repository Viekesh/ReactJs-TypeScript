import React, { useContext } from "react";
import User from "./User";
import Stats from "./Stats";
import ThemeCTX from "./CTX/ThemeCTX";

const Dashboard = () => {

    const { theme } = useContext(ThemeCTX);

    return (
        <div className="dashboard" style={theme}>
            <h1 className="title">Dashboard</h1>
            <User />
            <Stats />
        </div>
    );
};

export default Dashboard;
