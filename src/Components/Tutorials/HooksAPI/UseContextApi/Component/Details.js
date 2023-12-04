import React, { useContext } from "react";
import OpenOrClosed from "./OpenOrClosed";
import RestaurantContext from "./RestaurantContext";

const Details = () => {

    const { name } = useContext(RestaurantContext);

    return (
        <>
            <div className="res-name">{name}</div>
            <OpenOrClosed />
        </>
    );
};

export default Details;
