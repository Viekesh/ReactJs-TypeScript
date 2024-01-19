import React, { useState } from "react";



const StockAPI = () => {

    const [stocks, setStocks] = useState([]);

    const [showDetails, setShowDetails] = useState(false);

    const [selected, setSelected] = useState("");

    const [details, setDetails] = useState({});

    return (
        <>
            <div className="stock_app">
                <div className="stock_list"></div>
            </div>
        </>
    )
}



export default StockAPI;