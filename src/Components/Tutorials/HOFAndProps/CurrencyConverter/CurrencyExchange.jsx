import { useState } from "react";
import CurrencyConv from "./CurrencyCon";




const CurrencyExchange = () => {

    const [amount, setAmount] = useState("1");

    const [currency, setCurrency] = useState("INR");

    const currencyAmt = (event) => {
        setAmount(event.target.value);
    };

    const currencyDeclare = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <section className="curr_exchange">

                <input
                    type="number"
                    id="amount_to_convert"
                    value={currency}
                    onChange={currencyAmt}
                />

                <select
                    id="target_curr"
                    value={currency}
                    onChange={currencyDeclare}
                >
                    <option value="INR">Indian Rupee</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">British Pound</option>
                    <option value="HKD">Hong Kong Dollar</option>
                </select>

                <CurrencyConv
                    amount={amount}
                    currency={currency}
                >
                    {
                        ({ error, result }) => !error
                            ?
                            (<div id="result">
                                {amount} USD = {result} {currency}
                            </div>)
                            :
                            (
                                <h3>We could not fetch any data</h3>
                            )
                    }
                </CurrencyConv>
            </section>
        </>
    )
}



export default CurrencyExchange;