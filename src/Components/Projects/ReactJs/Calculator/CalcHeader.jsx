import { useEffect, useRef } from "react";



const CalcHeader = () => {

    const resultRef = useRef();

    const expressionRef = useRef();

    useEffect(() => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, [resultRef]);

    return (
        <>
            <section className="calc_header">
                <div className="header_history custom_scroll">123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br /></div>

                <div
                    className="header_expression custom_scroll"
                    ref={expressionRef}
                >
                    <span className="custom_scroll">custom_scrollcustom_scrollcustom_scrollcustom_scrollcustom_scrollcustom_scroll</span>
                </div>

                <div
                    className="header_result"
                    ref={resultRef}
                >
                    35
                </div>
            </section>
        </>
    )
}



export default CalcHeader;