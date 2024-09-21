import { MdOutlineCreate } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoStopwatchOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";



const sideBarItems = [
    {
        id: 0,
        icons: <MdOutlineCreate size={"18px"} />,
        text: "create"
    },
    {
        id: 1,
        icons: <IoReaderOutline size={"18px"} />,
        text: "read"
    },
    {
        id: 2,
        icons: <MdOutlineFavoriteBorder size={"18px"} />,
        text: "favourite"
    },
    {
        id: 3,
        icons: <IoStopwatchOutline size={"18px"} />,
        text: "freez"
    },
    {
        id: 4,
        icons: <MdOutlineHistory size={"18px"} />,
        text: "history"
    },
    {
        id: 4,
        icons: <MdUpdate size={"18px"} />,
        text: "update"
    },
    {
        id: 6,
        icons: <MdOutlineExpandMore size={"18px"} />,
        text: "more"
    },
]

const CRUDSideBar = () => {
    return (
        <>
            <section className="crudsidebar">
                {
                    sideBarItems.map((data) => {
                        return (
                            <>
                                <div className="crudsidebarele" key={data.id}>
                                    <button type="button" title="create" className="y_axis_center">{data.icons}{data.text}</button>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
};



export default CRUDSideBar;