import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdDeleteOutline,
    MdOutlineReport,
    MdOutlineMarkEmailUnread,
    MdOutlineWatchLater,
    MdOutlineAddTask,
    MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";



const DetailNote = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className="detailnote">
                <div className="detailnoteele y_axis_center">
                    <div className="diricons y_axis_center" onClick={() => navigate("/CRUD")}>
                        <IoMdArrowBack size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <BiArchiveIn size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineReport size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdDeleteOutline size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineMarkEmailUnread size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineWatchLater size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineAddTask size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineDriveFileMove size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <IoMdMore size={"15px"} />
                    </div>
                </div>

                <div className="note_count y_axis_center">
                    <p>subject</p>
                    <p>inbox</p>
                </div>

                <div className="note_date">
                    <p>date</p>
                </div>
            </section>
        </>
    );
};



export default DetailNote;