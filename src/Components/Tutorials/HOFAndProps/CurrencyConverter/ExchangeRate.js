import { useEffect, useState } from "react";




const exchangeRates = {
    INR: 83,
    EUR: 89,
    GBP: 0.75,
    HKD: 7.79,
}



const ExchangeRate = ({ currency }) => {

    const [rate, setRate] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRate = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await Promise.resolve(exchangeRates[currency]);
                setRate(response);
                console.log(rate);
            } catch (error) {
                setError("failed to fetch exchange rate");
                console.log(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        if (currency) {
            fetchRate();
        }

    }, [rate, currency]);

    if (isLoading) {
        return <p>Loading exchange rate...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <section className="exchange_rate">
                {rate ? (
                    <p>
                        1 USD is equal to {rate} {currency}.
                    </p>
                ) : (
                    <p>No exchange rate available for {currency}.</p>
                )}
            </section>
        </>
    )
}



export default ExchangeRate;