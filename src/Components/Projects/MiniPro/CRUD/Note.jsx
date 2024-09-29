import { useNavigate } from "react-router-dom";




const Note = () => {

    const navigate = useNavigate();

    const openNote = () => {
        navigate("/Notes/kjdfklja3933j3k43k")
    };

    return (
        <>
            <section className="note y_axis_center" onClick={openNote}>
                <div className="note_para">
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>

                <div className="note_date">
                    <p>date</p>
                </div>
            </section>
        </>
    )
};



export default Note;