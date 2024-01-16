import React, { useState } from "react";



const CodeInput = ({ onSet }) => {

    const [code, setCode] = useState();

    const onSetCode = ({ val }) => {
        onSet(val);
        setCode(val);
    };

    return (
        <>
            <div className="code_input"></div>

            <input
                type="text"
                value={code}
                onChange={e => onSetCode()}
            />

            <button
                onClick={() => onSetCode(parseInt(Math.random() * 100000000))}
            >
                Generate
            </button>
        </>
    )
}



export default CodeInput;