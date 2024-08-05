import { useId } from "react";




const CurrInpBoxOne = (
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectedCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false,
        className = "",
    }
) => {

    const id = useId();

    return (
        <>
            <div className="curr_inp_box_one">
                <div className="currency_inp">
                    <label htmlFor={id}>{label}</label>
                    <input
                        id={id}
                        type="number"
                        placeholder="amount"
                        disabled={amountDisabled}
                        value={amount}
                        onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                    />
                </div>

                <div className="selected_curr">
                    <p>currency type :</p>
                    <select
                        value={selectedCurrency}
                        onChange={(event) => { onCurrencyChange && onCurrencyChange(event.target.value) }}
                        disabled={currencyDisabled}
                    >
                        {
                            currencyOptions.map((currency) => (
                                <option value={currency} key={currency}>{currency}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    )
};



export default CurrInpBoxOne;