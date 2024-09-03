import { useEffect, useRef } from "react";



const CalcHead = ({ expression, result, history }) => {

    const resultRef = useRef();

    useEffect(() => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, [result]);

    return (
        <>
            <div className="calc_head">
                <div className="head_history custom_scroll">
                    <p>10+6</p>
                    <p>33*87</p>
                    <p>65*99</p>
                    <p>10+6</p>
                    <p>33*87</p>
                    <p>65*99</p>
                </div>

                <div className="head_expression">
                    <p>9 + 9 + 9 + 9 + 9 + 9 + 10</p>
                </div>

                <div ref={resultRef} className="head_result">12</div>
            </div>
        </>
    )
};



export default CalcHead;