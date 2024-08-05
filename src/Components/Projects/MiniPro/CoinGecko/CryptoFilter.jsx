import { useContext, useRef } from "react";
import CryptoSearch from "./CryptoSearch";
import { FaChevronCircleRight } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { CryptoContext } from "./CryptoContext";



const CryptoFilter = () => {

    const { setCurrency, setSortBy, resetData } = useContext(CryptoContext);

    const currencyRef = useRef(null);

    const handleCurrencyReq = (event) => {
        event.preventDefault();
        const value = currencyRef.current.value;
        setCurrency(value);
        currencyRef.current.value = "";
    };

    const handleSortReq = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSortBy(value);
    }

    return (
        <>
            <section className="crypto_filter crypto_options y_axis_center">
                <CryptoSearch />
                <div className="crypto_currency y_axis_center">
                    <form className="y_axis_center" onSubmit={handleCurrencyReq}>
                        <label htmlFor="currency"></label>

                        <input
                            type="text"
                            placeholder="usd"
                            required
                            ref={currencyRef}
                        />

                        <button type="submit y_axis_center">
                            <FaChevronCircleRight />
                        </button>

                        <button onClick={resetData}>
                            <BiReset />
                        </button>
                    </form>


                    <div className="crypto_sorting">
                        <label className="y_axis_center">
                            <select name="" onClick={handleSortReq}>
                                <option value="id_asc">Id Asc</option>
                                <option value="id_desc">Id Desc</option>
                                <option value="market_cap_asc">Market Cap Asc</option>
                                <option value="market_cap_desc">Market Cap Desc</option>
                                <option value="Volume_asc">Volume Asc</option>
                                <option value="volume_desc">Volume Desc</option>
                                <option value="gecko_asc">Gecko Asc</option>
                                <option value="gecko_desc">Gecko Desc</option>
                            </select>
                        </label>
                    </div>
                </div>
            </section>
        </>
    )
}



export default CryptoFilter;