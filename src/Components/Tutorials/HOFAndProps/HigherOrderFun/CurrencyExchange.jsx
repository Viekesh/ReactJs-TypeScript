import { useEffect, useState } from "react";
import CurrencyConv from "./CurrencyConv";




const CurrencyExchange = ({ compute }) => {

    const [amount, setAmount] = useState(1);

    const [currency, setCurrency] = useState("INR");

    const [result, setResult] = useState(1);

    const [error, setError] = useState(false);

    useEffect(() => {
        compute(amount, currency)
            .then(result => setResult(result))
            .catch(() => setError(true));
    }, [amount, currency, compute]);

    return (
        <>
            <section className="curr_exchange">
                <div className="curr_app">
                    <h2>Convert US Dollars</h2>
                    <input
                        type="number"
                        id="amount-to-convert"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <select
                        id="target-currency"
                        value={currency}
                        onChange={e => setCurrency(e.target.value)}
                    >
                        <option value="INR">Indian Rupees</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                        <option value="HKD">Hong Kong Dollar</option>
                    </select>

                    {
                        !error ? (
                            <div id="result">
                                {amount} USD = {result} {currency}
                            </div>
                        ) : (
                            <h3>We could not fetch any data</h3>
                        )
                    }
                </div>
            </section>
        </>
    )
}



export default CurrencyConv(CurrencyExchange);