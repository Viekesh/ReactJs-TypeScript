import { useLayoutEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";



// const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=full&x_cg_demo_api_key=CG-iuTzfjYcKk6E1Q668rcz3scH`;

const CryptoContextProvider = ({ children }) => {

    // const [test, setTest] = useState("This is a context text");

    const [cryptoData, setCryptodata] = useState();

    const [coinSearch, setCoinSearch] = useState("");

    const [searchData, setSearchData] = useState("");

    const [currency, setCurrency] = useState("usd");

    const [sortBy, setSortBy] = useState("market_cap_desc");

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages, setTotalPages] = useState(250);

    const [perPage, setPerPage] = useState(10);



    const getCryptodata = async () => {
        try {
            const crptData = await fetch(`https://api.coingecko.com/api/v3/coins/list`).then(res => res.json()).then(json => json);

            console.log(crptData);

            setTotalPages(crptData.length);

        } catch (error) {
            console.log(error.message);
        }



        try {
            const crptData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=full&x_cg_demo_api_key=CG-iuTzfjYcKk6E1Q668rcz3scH`).then(res => res.json()).then(json => json);

            console.log(crptData);

            setCryptodata(crptData);

            console.log("data:", cryptoData)

        } catch (error) {
            console.log(error.message);
        }
    }



    const getSearchRes = async (query) => {
        try {
            const srchData = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(res => res.json()).then(json => json);

            console.log(srchData);

            setSearchData(srchData.coins);

            console.log("data:", searchData);

        } catch (error) {
            console.log(error.message);
        }
    }



    // const getCoinData = async () => {
    //     try {
    //         const crptData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=full&x_cg_demo_api_key=CG-iuTzfjYcKk6E1Q668rcz3scH`).then(res => res.json()).then(json => json);

    //         console.log(crptData);

    //         setCryptodata(crptData);

    //         console.log("data:", cryptoData)

    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    useLayoutEffect(() => {
        getCryptodata();
    }, [coinSearch, currency, sortBy, currentPage, perPage]);



    const resetData = () => {
        setCurrentPage(1);
        setCoinSearch("");
    }



    return (
        <CryptoContext.Provider value={
            {
                cryptoData,
                searchData,
                getSearchRes,
                setCoinSearch,
                setSearchData,
                currency, setCurrency,
                sortBy, setSortBy,
                currentPage, setCurrentPage,
                totalPages,
                resetData,
                perPage, setPerPage
            }
        }>
            {children}
        </CryptoContext.Provider>
    )

};



export default CryptoContextProvider;