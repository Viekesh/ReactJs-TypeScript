import { useContext, useRef } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaChevronCircleRight } from "react-icons/fa";
import { CryptoContext } from "./CryptoContext";



const PerPage = () => {

    const inputRef = useRef(null);

    const { setPerPage } = useContext(CryptoContext);

    const handlePerPageCoins = (event) => {
        event.preventDefault();
        const val = inputRef.current.value;
        if (val !== 0) {
            setPerPage(val);
            inputRef.current.value = val;
        };
    };

    return (
        <>
            <section className="per_page y_axis_center">

                <form className="y_axis_center" onSubmit={handlePerPageCoins}>
                    <label htmlFor="perpage">per page</label>

                    <input
                        type="number"
                        name="perpage"
                        placeholder="10"
                        required
                        ref={inputRef}
                        min={1}
                        max={250}
                    />

                    <button type="submit y_axis_center">
                        <FaChevronCircleRight />
                    </button>

                </form>

            </section>
        </>
    )
}



const CryptoPagination = () => {

    const { cryptoData, currentPage, setCurrentPage, totalPages, perPage } = useContext(CryptoContext);

    const totalNumber = Math.ceil(totalPages / perPage);

    const nextPage = () => {
        if (currentPage === totalNumber) {
            return null;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const multiStepNext = () => {
        if (currentPage + 3 >= totalNumber) {
            setCurrentPage(totalNumber - 1)
        } else {
            setCurrentPage(currentPage + 3);
        }
    };

    const multiStepPrev = () => {
        if (currentPage + 3 <= 1) {
            setCurrentPage(totalNumber + 1)
        } else {
            setCurrentPage(currentPage - 3);
        }
    };

    if (cryptoData && cryptoData.length >= perPage) {
        return (
            <section className="pagination y_axis_center">

                <PerPage />

                <ul className="y_axis_center">
                    <li>
                        <div className="arrow x_y_axis_center" onClick={prevPage}>
                            <CiCircleChevLeft />
                        </div>
                    </li>

                    {
                        currentPage + 1 === totalNumber || currentPage === totalNumber
                            ?
                            <li onClick={multiStepPrev}><button>...</button></li>
                            :
                            null
                    }

                    {
                        currentPage - 1 !== 0
                            ?
                            <li onClick={prevPage}><button>{currentPage - 1}</button></li>
                            :
                            null
                    }

                    <li><button disabled>{currentPage}</button></li>

                    {
                        currentPage + 1 !== totalNumber && currentPage !== totalNumber
                            ?
                            <li onCl ick={nextPage}><button>{currentPage + 1}</button></li>
                            :
                            null
                    }

                    {
                        currentPage + 1 !== totalNumber && currentPage !== totalNumber
                            ?
                            <li onClick={multiStepNext}><button>...</button></li>
                            :
                            null
                    }

                    {
                        currentPage !== totalNumber
                            ?
                            <li onClick={() => setCurrentPage(totalNumber)}><button>{totalNumber}</button></li>
                            :
                            null
                    }
                    <li>
                        <div className="arrow x_y_axis_center" onClick={nextPage}>
                            <CiCircleChevRight />
                        </div>
                    </li>
                </ul>
            </section>
        )
    } else {
        return null;
    }

}



export default CryptoPagination;