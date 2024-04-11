import "./CPaths.scss";
import { FaGreaterThan } from "react-icons/fa";



const CPaths = ({ p1, p2, p3, dest }) => {
    return (
        <>
            <section className="c_paths">
                <div className="paths_container y_axis_center">
                    <div className="path">{p1}</div>
                    <FaGreaterThan />
                    <div className="path">{p2}</div>
                    <div className="path">{p3}</div>
                    <div className="path dest">{dest}</div>
                </div>
            </section>
        </>
    )
}



export default CPaths;