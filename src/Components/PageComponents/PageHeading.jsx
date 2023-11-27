import "./PageHeading.css";



const PageHeading = (props) => {
    return (
        <>
            <div className="page_heading">
                <h1>{props.heading}</h1>
            </div>
        </>
    )
}

export default PageHeading;
