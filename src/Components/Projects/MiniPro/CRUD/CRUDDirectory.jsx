import { MdCropDin } from "react-icons/md";
import { IoRefresh } from "react-icons/io5";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineMoreVert } from "react-icons/md";
import { MdNotes } from "react-icons/md";
import { useState } from "react";
import Notes from "./Notes";



const noteType = [
    {
        id: 0,
        icon: <MdNotes size={"12px"} />,
        text: "primary",
    },
    {
        id: 0,
        icon: <MdNotes size={"12px"} />,
        text: "promotional",
    },
    {
        id: 0,
        icon: <MdNotes size={"12px"} />,
        text: "social",
    },
]



const CRUDDirectory = () => {

    const [notesType, notesTypeSelected] = useState(0);

    // const notestypesel = (index) => {
    //     notesTypeSelected(index);
    // };

    return (
        <>
            <section className="cruddir">
                <div className="cruddirele y_axis_center">
                    <div className="diricons y_axis_center">
                        <MdCropDin size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineExpandMore size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <IoRefresh size={"15px"} />
                    </div>

                    <div className="diricons y_axis_center">
                        <MdOutlineMoreVert size={"15px"} />
                    </div>
                </div>

                <div className="notes y_axis_center">
                    {
                        noteType.map((data, index) => {
                            return (
                                <>
                                    <div className="notesele y_axis_center" key={index}>
                                        <button
                                            className={`notesicons y_axis_center ${notesType === index ? "borderbot" : ""}`}
                                            onClick={() => notesTypeSelected(index)}
                                        >
                                            {data.icon}
                                            {data.text}
                                        </button>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>

                <div className="newnotesbox">
                    <Notes />
                </div>
            </section>
        </>
    );
};



export default CRUDDirectory;
