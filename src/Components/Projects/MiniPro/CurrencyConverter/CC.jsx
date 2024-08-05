import { useState } from "react";
import "./CC.scss";
import useCurrencyCustomHook from "./useCurrencyCustomHook";
import { CurrInpBoxOne } from "./CurrencyIndex";



const CC = () => {

    const [amount, setAmount] = useState(0);

    const [convertFrom, setConvertFrom] = useState("usd");

    const [convertTo, setConvertTo] = useState("inr");

    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyData = useCurrencyCustomHook(convertFrom);

    const options = Object.keys(currencyData);

    const swap = () => {
        convertFrom(convertTo);
        convertTo(convertFrom);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyData[convertTo]);
    };

    const currChange = (currency) => {
        setConvertFrom(currency);
    };

    const amtChange = (amount) => {
        setConvertedAmount(amount);
    };

    const onSubmitCurrForm = (event) => {
        event.preventDefault();
        convert();
    };

    return (
        <>
            <section className="cc">
                <div className="currency_form">
                    <form onSubmit={onSubmitCurrForm}>
                        <div className="curr_input">
                            <CurrInpBoxOne
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={currChange}
                                onAmountChange={amtChange}
                                selectedCurrency={convertFrom}
                            />
                        </div>

                        <div className="swap_btn">
                            <button onClick={swap}>swap</button>
                        </div>

                        <div className="curr_input">
                            <CurrInpBoxOne
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setConvertTo(currency)}
                                selectedCurrency={convertTo}
                                amountDisabled
                            />
                        </div>

                        <button type="submit">Convert {convertFrom.toUpperCase} to {convertTo.toUpperCase}</button>
                    </form>
                </div>
            </section>
        </>
    )
}



export default CC;



// You can access object by using dot '.' notation as well as squadre '[]' notation.