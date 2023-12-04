import React, { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

const OpenOrClosed = () => {

    const { isOpen: status } = useContext(RestaurantContext);

    return (
        <div className={status ? "res-open" : "res-closed"}>
            {status ? "Open Now" : "Closed"}
        </div>
    );
};

export default OpenOrClosed;
