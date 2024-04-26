import CryptoFilter from "./CryptoFilter";
import CryptoTable from "./CryptoTable";




const Crypto = () => {
    return (
        <>
            <section className="crypto">
                <CryptoFilter />
                <CryptoTable />
            </section>
        </>
    )
}



export default Crypto;