import { useEffect, useRef, useState } from "react";
import "./UseRefHook.css";



const UseRefHook = () => {

    // Ex: 1
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1
    });
    const setValue = (e) => {
        setInputValue(e.target.value);
    }
    // It's like doing this: const count = {current: 0}. We can access the count by using count.current.



    // Ex: 2 (Accessing DOM Elements)
    const inputElement = useRef()
    const focusInput = () => {
        inputElement.current.focus();
    };



    // Ex: 3 (Tracking State Changes)
    const [inpValue, setInpValue] = useState("");

    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inpValue;
    }, [inpValue]);

    const currentInpValue = (e) => {
        return (
            setInpValue(e.target.value)
        )
    };

    return (
        <>
            <section className="useref_hook">

                {/* Ex: 1 */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={setValue}
                />
                <h1>Render Count : {count.current}</h1>



                {/* Ex: 2 */}
                <input
                    type="text"
                    ref={inputElement}
                />
                <button onClick={focusInput}>FocusInput</button>



                {/* Ex: 3 */}
                <input
                    type="text"
                    value={inpValue}
                    onChange={currentInpValue}
                />
                <h2>Current Value: {inpValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>
            </section>
        </>
    )
}



export default UseRefHook;

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an
// infinite loop since this Hook itself causes a re - render.To avoid this, we can use the useRef Hook.

// The useRef Hook can also be used to keep track of previous state values. (Ex: 3)
// This is because we are able to persist useRef values between renders.