import { useNavigate } from "react-router-dom";




const Note = () => {

    const navigate = useNavigate();

    const openNote = () => {
        navigate("/Notes/kjdfklja3933j3k43k")
    };

    return (
        <>
            <section className="note">notes</section>
        </>
    )
};



export default Note;