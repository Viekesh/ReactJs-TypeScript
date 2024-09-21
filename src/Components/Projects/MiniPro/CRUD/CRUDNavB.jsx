import { TbGridDots } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";



const CRUDNavB = () => {
    return (
        <>
            <section className="crudnavb">
                <div className="crudnavele y_axis_center">
                    <div className="mbtn y_axis_center"><TbGridDots size={"21px"} /></div>
                    <div className="mbtn y_axis_center"><CiSettings size={"24px"} /></div>
                    <div className="mbtn y_axis_center"><FaRegCircleQuestion size={"21px"} /></div>
                </div>
            </section>
        </>
    )
}



export default CRUDNavB;