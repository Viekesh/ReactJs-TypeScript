import CrudNav from "./CRUDNav";
import "./CRUD.scss";
import CRUDNavB from "./CRUDNavB";
import CRUDSideBar from "./CRUDSideBar";
import { Outlet } from "react-router-dom";



const CRUD = () => {
    return (
        <>
            <section className="crud">
                <CrudNav />
                <CRUDNavB />

                <div className="crudsubcompo">
                    <CRUDSideBar />
                    <Outlet />
                </div>
            </section>
        </>
    );
};



export default CRUD;



// The component we type in between children property of react router dom they can comes under outlet.