import { useState } from "react";



const CodeInput = ({ onSet }) => {

    const [code, setCode] = useState();

    const onSetCode = (val) => {
        onSet(val);
        setCode(val);
    };

    return (
        <>
            <div className="code_input">

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
            </div>
        </>
    )
}



export default CodeInput;