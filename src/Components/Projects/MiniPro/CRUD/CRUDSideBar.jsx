import { MdOutlineCreate } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoStopwatchOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../../../../Redux/CRUDSlice";



const sideBarItems = [
    // {
    //     id: 0,
    //     icons: <MdOutlineCreate size={"18px"} />,
    //     text: "create"
    // },
    {
        id: 0,
        icons: <IoReaderOutline size={"18px"} />,
        text: "read"
    },
    {
        id: 1,
        icons: <MdOutlineFavoriteBorder size={"18px"} />,
        text: "favourite"
    },
    {
        id: 2,
        icons: <IoStopwatchOutline size={"18px"} />,
        text: "freez"
    },
    {
        id: 3,
        icons: <MdOutlineHistory size={"18px"} />,
        text: "history"
    },
    {
        id: 4,
        icons: <MdUpdate size={"18px"} />,
        text: "update"
    },
    {
        id: 5,
        icons: <MdOutlineExpandMore size={"18px"} />,
        text: "more"
    },
]



const CRUDSideBar = () => {

    // const [open, setOpen] = useState(false);

    // this is local state variable, we need to send "open" in "CreateNote.jsx" component
    // so we need to use redux toolkit, it provide us global state store where we can get this "open"
    // variable for "CreateNote.jsx" component.

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setOpen(true)); // Dispatch the setOpen action with the desired value
    };

    return (
        <>
            <section className="crudsidebar y_axis_center">
                {/* <div className="crudsidebarele" onClick={() => dispatch(setOpen(true))}> */}
                <div className="crudsidebarele" onClick={handleClick}>
                    <button type="button" title="create" className="y_axis_center"><MdOutlineCreate size={"18px"} /> create</button>
                </div>

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


