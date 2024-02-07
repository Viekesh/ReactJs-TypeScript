import { useEffect, useRef } from "react";



const CalcHeader = ({ expression, result, history }) => {

    const resultRef = useRef();

    const expressionRef = useRef();

    useEffect(() => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, [result]);

    useEffect(() => {
        expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
    }, [expression]);

    return (
        <>
            <section className="calc_header">
                <div className="header_history custom_scroll">
                    {
                        history &&
                        history?.map((item) => (
                            <p key={item + "" + Math.random() * 44}>{item}</p>
                        ))
                    }
                </div>

                <div
                    className="header_expression custom_scroll"
                    ref={expressionRef}
                >
                    <span className="custom_scroll">{expression}</span>
                </div>

                <div
                    className="header_result"
                    ref={resultRef}
                >
                    {result}
                </div>
            </section>
        </>
    )
}



export default CalcHeader;