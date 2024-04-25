import { IoSearchSharp } from "react-icons/io5";



const GBooks = () => {
    return (
        <>
            <section className="g_books">
                <h1>a room without book is like body without soul.</h1>
                <p>search your book here.</p>
                <form className="search_elements">
                    <input
                        type="text"
                        placeholder="Enter Your Book Name"
                    />
                    <button>
                        <IoSearchSharp />
                    </button>
                </form>
            </section>
        </>
    )
}



export default GBooks;