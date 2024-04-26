import { useContext, useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { CryptoContext } from "./CryptoContext";



const CryptoSearch = () => {

    const [searchCrypto, setSearchCrypto] = useState("");

    let { getSearchRes } = useContext(CryptoContext);

    const handleSearchReq = (event) => {
        event.preventDefault();

        let query = event.target.value;

        // console.log(query);
        setSearchCrypto(query);

        getSearchRes(query);
    };

    return (
        <>
            <section className="crypto_search">
                <form className="crypto_search_form y_axis_center">
                    <input
                        type="text"
                        name="search"
                        value={searchCrypto}
                        placeholder="Search Here"
                        onChange={handleSearchReq}
                    />
                    <button className="crypto_btn x_y_axis_center">
                        <IoSearchCircleOutline />
                    </button>
                </form>

                {
                    searchCrypto.length > 0 ?
                        <ul className="crypto_search_res crypto_options">
                            <li>bitcoin</li>
                        </ul> :
                        null
                }
            </section>
        </>
    )
}



export default CryptoSearch;