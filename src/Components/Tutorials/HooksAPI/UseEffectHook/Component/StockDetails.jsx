import React from "react";



const StockDetails = ({ data }) => {

    const { sym, name, current, open, marketCap, high, low, prevClose } = data;

    return (
        <>
            <div className="details">
                <div className="sym_det">{sym}</div>
                <div className="name_det">{name}</div>
                <div className="col">
                    <div className="stats_det">Current: ${current}</div>
                    <div className="stats_det">Open: ${open}</div>
                    <div className="stats_det">Prev Close: ${prevClose}</div>
                </div>
                <div className="col">
                    <div className="stats_det">High: ${high}</div>
                    <div className="stats_det">Low: ${low}</div>
                    <div className="stats_det">Mkt Cap: ${marketCap}</div>
                </div>
            </div>
        </>
    )
};



export default StockDetails;
