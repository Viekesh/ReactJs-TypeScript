import { useContext, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { CryptoContext } from "./CryptoContext";



const CryptoPagination = () => {

    const { currentPage, setCurrentPage } = useContext(CryptoContext);

    const totalNumber = 250;

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

    return (
        <>
            <section className="pagination">
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
        </>
    )
}



export default CryptoPagination;