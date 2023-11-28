import React from "react";



const StockRate = ({ sym, name, current, onSelect }) => {
    return (
        <>
            <div className="rate" onClick={onSelect}>
                <div className="symbol">{sym}</div>
                <div className="name">{name}</div>
                <div className="current_rate">${current}</div>
            </div>
        </>
    )
}



export default StockRate;
