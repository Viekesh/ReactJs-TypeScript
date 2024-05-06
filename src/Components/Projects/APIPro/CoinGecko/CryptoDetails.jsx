import React from "react";
import ReactDOM from "react-dom";



const CryptoDetails = () => {
    return ReactDOM.createPortal(
        <>
            <section className="crypto_details x_y_axis_center">
                <div className="crypto_elem">CryptoDetails</div>
            </section>
        </>,
        document.getElementById("modal")
    )
}



export default CryptoDetails;