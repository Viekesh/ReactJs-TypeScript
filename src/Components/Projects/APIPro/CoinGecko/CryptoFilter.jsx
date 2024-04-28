import { useContext, useRef } from "react";
import CryptoSearch from "./CryptoSearch";
import { FaChevronCircleRight } from "react-icons/fa";
import { CryptoContext } from "./CryptoContext";




const CryptoFilter = () => {

    const { setCurrency } = useContext(CryptoContext);

    const currencyRef = useRef(null);

    const handleCurrencyReq = (event) => {
        event.preventDefault();
        const value = currencyRef.current.value;
        setCurrency(value);
        currencyRef.current.value = "";
    };

    return (
        <>
            <section className="crypto_filter crypto_options">
                <CryptoSearch />
                <div className="crypto_currency">
                    <form className="y_axis_center" onSubmit={handleCurrencyReq}>
                        <label htmlFor="currency">currency :</label>

                        <input
                            type="text"
                            placeholder="usd"
                            required
                            ref={currencyRef}
                        />

                        <button type="submit y_axis_center">
                            <FaChevronCircleRight />
                        </button>
                    </form>
                </div>
                <div className="crypto_sorting">sorting</div>
            </section>
        </>
    )
}



export default CryptoFilter;