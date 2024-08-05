import { Outlet } from "react-router-dom";
import CryptoFilter from "./CryptoFilter";
import CryptoTable from "./CryptoTable";




const Crypto = () => {
    return (
        <>
            <section className="crypto">
                <CryptoFilter />
                <CryptoTable />
                <Outlet />
            </section>
        </>
    )
}



export default Crypto;