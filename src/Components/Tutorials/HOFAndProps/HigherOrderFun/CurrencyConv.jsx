import ExchangeRate from "./ExchangeRate"




const CurrencyConv = Component => props => {

    const convertAmt = (amtToConvert, symbol) => {
        new Promise((resolve, reject) => {
            ExchangeRate(symbol).then(rate => {
                resolve(rate * amtToConvert);
            }).catch(() => {
                reject();
            });
        });
    };

    return (
        <>
            <Component
                {...props}
                compute={(amtToConvert, symbol) =>
                    convertAmt(amtToConvert, symbol)
                }
            />
        </>
    )
}



export default CurrencyConv;