


const JokesPanel = ({ setup, punchline }) => {
    return (
        <>
            <section className="jokes_panel x_y_axis_center">
                <div className="jokes_setup sixtyfour">{setup}</div>
                <div className="jokes_punchline rubik-glitch">{punchline}</div>
            </section>
        </>
    )
}



export default JokesPanel;