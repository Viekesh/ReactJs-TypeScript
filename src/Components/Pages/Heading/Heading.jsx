import "./Heading.scss";



const Heading = ({ head }) => {
    return (
        <>
            <section className="heading">
                <h1 className="lexend y_axis_center">{head}</h1>
            </section>
        </>
    )
}



export default Heading;