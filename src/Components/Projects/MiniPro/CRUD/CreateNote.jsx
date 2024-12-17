import { useSelector } from "react-redux";



const CreateNote = () => {

    // const { open } = useSelector(Store => Store.CRUDSlice.open);

    const open = useSelector((state) => state.CRUDSlice.open); // Access state directly

    return (
        <>
            <section className={`${open ? "block" : "hidden"} create_note`}>
                <div className="new_note">
                    <h1>new note</h1>
                </div>

                <div className="note_form">
                    <form action="">
                        <input type="text" title="new note" placeholder="New Note" />
                        <input type="text" title="new note" placeholder="Title" />
                        <textarea name="" id="" rows={"6"} placeholder="Enter The Text Here"></textarea>
                        <button type="submit" title="new note">Create</button>
                    </form>
                </div>
            </section>
        </>
    );
};



export default CreateNote;
