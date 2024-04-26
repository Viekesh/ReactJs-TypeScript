import { useContext, useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { CryptoContext } from "./CryptoContext";
import debounce from "lodash.debounce";





const SearchInput = ({ handleDebounce }) => {

    const [searchCrypto, setSearchCrypto] = useState("");

    let { searchData } = useContext(CryptoContext);

    const handleSearchReq = (event) => {
        event.preventDefault();

        let query = event.target.value;

        // console.log(query);
        setSearchCrypto(query);

        handleDebounce(query);
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
                            {
                                searchData ?
                                    searchData.map((data) => {
                                        return (
                                            <>
                                                <li key={data.id} className="y_axis_center">
                                                    <img src={data.thumb} alt={data.name} />
                                                    <span className="y_axis_center">{data.name}</span>
                                                </li>
                                            </>
                                        )
                                    })
                                    : <h3>Please Wait...</h3>
                            }
                        </ul> :
                        null
                }
            </section>
        </>
    )
};



const CryptoSearch = () => {

    // const [searchCrypto, setSearchCrypto] = useState("");

    let { getSearchRes } = useContext(CryptoContext);

    // whenever you search, an api is called 3 to 4 times, to stop this we use lodash.debounce function.
    // But after using this function we still face same condition, because we have using useState.
    // When we using useState the component is rerender, so separate the state first.
    const debouncFunc = debounce(function (val) {
        getSearchRes(val)
    }, 2000);

    return (
        <>
            <SearchInput handleDebounce={debouncFunc} />
        </>
    )
}



export default CryptoSearch;