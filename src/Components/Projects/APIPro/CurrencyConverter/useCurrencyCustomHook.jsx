import { useEffect, useState } from "react";




const useCurrencyCustomHook = (currency) => {

    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setCurrencyData(data[currency]));
    }, [currency]);

    console.log(currencyData);

    // return (
    //     currencyData
    // )
    return currencyData
}



export default useCurrencyCustomHook;



// A Custom hook is nothing more than a function.