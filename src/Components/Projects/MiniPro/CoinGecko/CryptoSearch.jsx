// import { useContext, useState } from "react";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { CryptoContext } from "./CryptoContext";
// import debounce from "lodash.debounce";





// const SearchInput = ({ handleDebounce }) => {

//     const [searchCrypto, setSearchCrypto] = useState("");

//     let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

//     const handleSearchReq = (event) => {
//         event.preventDefault();

//         let query = event.target.value;

//         // console.log(query);
//         setSearchCrypto(query);

//         handleDebounce(query);
//     };

//     const selectCoin = (coin) => {
//         setCoinSearch(coin);
//         setSearchCrypto("");
//         setSearchData();
//     };

//     const handleSubmitReq = (event) => {
//         event.preventDefault();
//         handleSearchReq(searchCrypto);
//     };

//     return (
//         <>
//             <section className="crypto_search">
//                 <form className="crypto_search_form y_axis_center" onSubmit={handleSubmitReq}>
//                     <input
//                         type="text"
//                         name="search"
//                         value={searchCrypto}
//                         placeholder="Search Here"
//                         onChange={handleSearchReq}
//                     />
//                     <button className="crypto_btn x_y_axis_center">
//                         <IoSearchCircleOutline />
//                     </button>
//                 </form>

//                 {
//                     searchCrypto.length > 0 ?
//                         <ul className="crypto_search_res crypto_options">
//                             {
//                                 searchData ?
//                                     searchData.map((data) => {
//                                         return (
//                                             <>
//                                                 <li
//                                                     key={data.id}
//                                                     className="y_axis_center"
//                                                     onClick={() => selectCoin(data.id)}
//                                                 >
//                                                     <img src={data.thumb} alt={data.name} />
//                                                     <span className="y_axis_center">{data.name}</span>
//                                                 </li>
//                                             </>
//                                         )
//                                     })
//                                     : <h3>Please Wait...</h3>
//                             }
//                         </ul> :
//                         null
//                 }
//             </section>
//         </>
//     )
// };



// const CryptoSearch = () => {

//     // const [searchCrypto, setSearchCrypto] = useState("");

//     let { getSearchRes } = useContext(CryptoContext);

//     // whenever you search, an api is called 3 to 4 times, to stop this we use lodash.debounce function.
//     // But after using this function we still face same condition, because we have using useState.
//     // When we using useState the component is rerender, so separate the state first.
//     const debouncFunc = debounce(function (val) {
//         getSearchRes(val)
//     }, 2000);

//     return (
//         <>
//             <SearchInput handleDebounce={debouncFunc} />
//         </>
//     )
// }



// export default CryptoSearch;






// import { useContext, useState } from "react";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { CryptoContext } from "./CryptoContext";
// import debounce from "lodash.debounce";

// const SearchInput = ({ handleDebounce }) => {
//     const [searchCrypto, setSearchCrypto] = useState("");

//     const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

//     const handleSearchReq = (event) => {
//         event.preventDefault();
//         const query = event.target.value;
//         setSearchCrypto(query);
//         handleDebounce(query);
//     };

//     const selectCoin = (coin) => {
//         setCoinSearch(coin);
//         setSearchCrypto("");
//         setSearchData(); // Assuming this resets search data
//     };

//     return (
//         <>
//             <section className="crypto_search">
//                 <form className="crypto_search_form y_axis_center" onSubmit={handleSearchReq}>
//                     <input
//                         type="text"
//                         name="search"
//                         value={searchCrypto}
//                         placeholder="Search Here"
//                         onChange={handleSearchReq}
//                     />
//                     <button className="crypto_btn x_y_axis_center">
//                         <IoSearchCircleOutline />
//                     </button>
//                 </form>

//                 {searchCrypto.length > 0 && ( // Use conditional rendering here
//                     <ul className="crypto_search_res crypto_options">
//                         {searchData ? (
//                             searchData.map((data) => (
//                                 <li
//                                     key={data.id}
//                                     className="y_axis_center"
//                                     onClick={() => selectCoin(data.id)}
//                                 >
//                                     <img src={data.thumb} alt={data.name} />
//                                     <span className="y_axis_center">{data.name}</span>
//                                 </li>
//                             ))
//                         ) : (
//                             <h3>Please Wait...</h3>
//                         )}
//                     </ul>
//                 )}
//             </section>
//         </>
//     );
// };

// const CryptoSearch = () => {
//     const { getSearchRes } = useContext(CryptoContext);

//     const debouncFunc = debounce(function (val) {
//         getSearchRes(val);
//     }, 2000);

//     return (
//         <>
//             <SearchInput handleDebounce={debouncFunc} />
//         </>
//     );
// };

// export default CryptoSearch;





// import { useContext, useState } from "react";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { CryptoContext } from "./CryptoContext"; // Import CryptoContext
// import debounce from "lodash.debounce";

// const SearchInput = ({ handleDebounce }) => {
//     const [searchCrypto, setSearchCrypto] = useState("");

//     const { searchData, setCoinSearch } = useContext(CryptoContext); // Correct context usage

//     const handleSearchReq = (event) => {
//         event.preventDefault();

//         const query = event.target.value;

//         setSearchCrypto(query);
//         handleDebounce(query);
//     };

//     const selectCoin = (coin) => {
//         setCoinSearch(coin);
//         setSearchCrypto("");
//     };

//     const handleSubmitReq = (event) => {
//         event.preventDefault();
//         handleSearchReq(searchCrypto);
//     };

//     return (
//         <>
//             <section className="crypto_search">
//                 <form className="crypto_search_form y_axis_center" onSubmit={handleSubmitReq}>
//                     <input
//                         type="text"
//                         name="search"
//                         value={searchCrypto}
//                         placeholder="Search Here"
//                         onChange={handleSearchReq}
//                     />
//                     <button className="crypto_btn x_y_axis_center">
//                         <IoSearchCircleOutline />
//                     </button>
//                 </form>

//                 {searchCrypto.length > 0 && (
//                     <ul className="crypto_search_res crypto_options">
//                         {searchData ? (
//                             searchData.map((data) => (
//                                 <li
//                                     key={data.id}
//                                     className="y_axis_center"
//                                     onClick={() => selectCoin(data.id)}
//                                 >
//                                     <img src={data.thumb} alt={data.name} />
//                                     <span className="y_axis_center">{data.name}</span>
//                                 </li>
//                             ))
//                         ) : (
//                             <h3>Please Wait...</h3>
//                         )}
//                     </ul>
//                 )}
//             </section>
//         </>
//     );
// };

// const CryptoSearch = () => {
//     const { getSearchRes } = useContext(CryptoContext);

//     const debouncFunc = debounce(function (val) {
//         getSearchRes(val);
//     }, 2000);

//     return (
//         <>
//             <SearchInput handleDebounce={debouncFunc} />
//         </>
//     );
// };

// export default CryptoSearch;





import { useContext, useState } from "react";
// import { IoSearchCircleOutline } from "react-icons/io5";
import { CryptoContext } from "./CryptoContext"; // Assuming CryptoContext is defined elsewhere
import debounce from "lodash.debounce";

const SearchInput = ({ handleDebounce }) => {
    const [searchCrypto, setSearchCrypto] = useState("");
    const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

    const handleSearchReq = (event) => {
        event.preventDefault();
        const query = event.target.value;
        setSearchCrypto(query);
        handleDebounce(query);
    };

    const selectCoin = (coin) => {
        setCoinSearch(coin);
        setSearchCrypto("");
        setSearchData();
    };

    const handleSubmitReq = (event) => {
        event.preventDefault();
        handleSearchReq(searchCrypto);
    };

    return (
        <>
            <section className="crypto_search">
                <form className="crypto_search_form y_axis_center" onSubmit={handleSubmitReq}>
                    <input
                        type="text"
                        name="search"
                        value={searchCrypto}
                        placeholder="Search Here"
                        onChange={handleSearchReq}
                    />
                    {/* <button className="crypto_btn x_y_axis_center" type="submit">
                        <IoSearchCircleOutline />
                    </button> */}
                </form>

                {searchCrypto.length > 0 && (
                    <ul className="crypto_search_res crypto_options">
                        {searchData ? (
                            searchData.map((data) => (
                                <li
                                    key={data.id}
                                    className="y_axis_center"
                                    onClick={() => selectCoin(data.id)}
                                >
                                    <img src={data.thumb} alt={data.name} />
                                    <span className="y_axis_center">{data.name}</span>
                                </li>
                            ))
                        ) : (
                            <h3>Please Wait...</h3>
                        )}
                    </ul>
                )}
            </section>
        </>
    );
};

const CryptoSearch = () => {
    const { getSearchRes } = useContext(CryptoContext);

    const debouncFunc = debounce((val) => getSearchRes(val), 2000); // Debounce function

    return (
        <>
            <SearchInput handleDebounce={debouncFunc} />
        </>
    );
};

export default CryptoSearch;

