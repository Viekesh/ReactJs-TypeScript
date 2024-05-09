import { useEffect, useState } from "react";
import ExchangeRate from "./ExchangeRate";



const CurrencyConv = ({ amount, currency, children }) => {

    const [result, setResult] = useState(result);

    const [error, setError] = useState(null);

    useEffect(() => {
        ExchangeRate(currency)
            .then(rate => {
                setResult(rate * amount);
                setError(null);
            })
            .catch(() => {
                setError(true);
                setResult(1);
            });
    }, [amount, currency]);

    return children({ error, result });
}



export default CurrencyConv;