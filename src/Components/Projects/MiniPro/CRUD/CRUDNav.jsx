import { GiHamburgerMenu } from "react-icons/gi";



const CrudNav = () => {
    return (
        <>
            <section className="crudnav">
                <div className="crudnavele y_axis_center">
                    <div className="mbtn y_axis_center"><GiHamburgerMenu size={"21px"} /></div>
                    <div className="inpforsearch y_axis_center">
                        <input type="text" title="search" placeholder="Search" />
                    </div>
                </div>
            </section>
        </>
    );
};



export default CrudNav;