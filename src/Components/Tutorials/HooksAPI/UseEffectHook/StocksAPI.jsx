import React, { useEffect, useState } from "react";
import "./StocksAPI.css";
import StockRate from "./Component/StockRate";
import { getDetails, getRates } from "./ServiceDB/StocksDB";
import StockDetails from "./Component/StockDetails";



const StocksAPI = () => {

    const [stocks, setStocks] = useState([]);

    const [showDetails, setShowDetails] = useState(false);

    const [selected, setSelected] = useState("");

    const [details, setDetails] = useState({});



    useEffect(() => {
        getRates().then(data => setStocks(data));
    }, []);



    useEffect(() => {
        getDetails(selected).then(data => {
            setDetails(data[0]);
        })
    }, [selected]);

    return (
        <>
            <div className="stock_app">
                <h1 onClick={() => setShowDetails(false)}>Stock Master</h1>

                <div className="stock_list">
                    {
                        !showDetails && stocks && stocks.map(({ id, sym, name, current }) => (
                            <StockRate
                                sym={sym}
                                name={name}
                                current={current}
                                id={id}
                                onSelect={() => {
                                    setSelected(sym);
                                    setShowDetails(true);
                                }}
                            />
                        ))
                    }

                    {
                        showDetails && details && <StockDetails data={details} />
                    }
                </div>
            </div>
        </>
    )
};



export default StocksAPI;