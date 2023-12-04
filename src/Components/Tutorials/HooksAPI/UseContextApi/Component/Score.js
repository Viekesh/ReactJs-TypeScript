import React, { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

const Score = () => {
    const { score } = useContext(RestaurantContext);
    const getBgColor = val => {
        if (val <= 2.0) {
            return { backgroundColor: "rgb(255,0,0)" };
        } else if (val > 2.0 && val < 4.0) {
            return { backgroundColor: "rgb(214, 158, 26)" };
        } else {
            return { backgroundColor: "rgb(13, 114, 0)" };
        }
    };
    return (
        <div className="res-score" style={getBgColor(score)}>
            {score}
        </div>
    );
};

export default Score;
