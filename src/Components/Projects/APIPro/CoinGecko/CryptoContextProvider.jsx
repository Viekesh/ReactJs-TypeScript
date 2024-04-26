import { useLayoutEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";



const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&category=layer-1&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=full&x_cg_demo_api_key=CG-iuTzfjYcKk6E1Q668rcz3scH`

const CryptoContextProvider = ({ children }) => {

    // const [test, setTest] = useState("This is a context text");

    const [cryptoData, setCryptodata] = useState();

    const getCryptodata = async () => {
        try {
            const crptData = await fetch(apiUrl).then(res => res.json()).then(json => json);

            console.log(crptData);

            setCryptodata(crptData);

            console.log("data:", cryptoData)

        } catch (error) {
            console.log(error.message);
        }
    }

    useLayoutEffect(() => {
        getCryptodata();
    }, []);

    return (
        <CryptoContext.Provider value={{ cryptoData }}>
            {children}
        </CryptoContext.Provider>
    )

};



export default CryptoContextProvider;