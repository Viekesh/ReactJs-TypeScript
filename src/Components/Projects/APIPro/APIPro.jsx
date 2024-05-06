import "./APIPro.scss";
import cryplog from "../../../Assets/Images/coingeckologo.webp";
import { Link } from "react-router-dom";



const APIPro = () => {
    return (
        <>
            <section className="api_pro">
                <div className="pro_elem">
                    <Link to="/CoinGecko">
                        <img src={cryplog} alt="" />
                        <p className="cryp_descr">crypto api</p>
                    </Link>

                    <Link to="/CC"></Link>
                </div>
            </section>
        </>
    )
}



export default APIPro;