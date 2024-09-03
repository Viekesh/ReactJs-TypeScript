import { useEffect, useState } from "react";
// import "./Calculator.css";
import CalcHeader from "./CalcHeader";
import CalcKeypad from "./CalcKeypad";



const usedKeyCodes = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
    104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const operators = ["-", "+", "*", "/"];



const Calculator = () => {

    const [isLightMode, setIsLightMode] = useState();

    const [expression, setExpression] = useState("");

    const [result, setResult] = useState("");

    const [history, setHistory] = useState(
        JSON.parse(localStorage.getItem("calculator-app-history")) || []
    );

    const convertDarkMode = () => {
        setIsLightMode(!isLightMode);
    };

    const handleKeyPress = (keyCode, key) => {
        if (!keyCode) return;
        if (!usedKeyCodes.includes(keyCode)) return;

        if (numbers.includes(key)) {
            if (key === "0") {
                if (expression.length === 0) return;
            }
            calculateResult(expression + key);
            setExpression(expression + key);
        } else if (operators.includes(key)) {
            if (!expression) return;

            const lastChar = expression.slice(-1);
            if (operators.includes(lastChar)) return;
            if (lastChar === ".") return;

            setExpression(expression + key);
        } else if (key === ".") {
            if (!expression) return;
            const lastChar = expression.slice(-1);
            if (!numbers.includes(lastChar)) return;

            setExpression(expression + key);
        } else if (keyCode === 8) {
            if (!expression) return;
            calculateResult(expression.slice(0, -1));
            setExpression(expression.slice(0, -1));
        } else if (keyCode === 13) {
            if (!expression) return;
            calculateResult(expression);

            let tempHistory = [...history];
            if (tempHistory.length > 20) tempHistory = tempHistory.splice(0, 1);
            tempHistory.push(expression);
            setHistory(tempHistory);
        }
    };



    useEffect(() => {
        localStorage.setItem("calculator-app-mode", JSON.stringify(isLightMode));
    }, [isLightMode]);



    useEffect(() => {
        localStorage.setItem("calculator-app-history", JSON.stringify(history));
    }, [history]);



    const calculateResult = (exp) => {
        if (!exp) {
            setResult("");
            return;
        }
        const lastChar = exp.slice(-1);
        if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);

        const answer = eval(exp).toFixed(2) + "";
        setResult(answer);
    };

    return (
        <>
            <section
                className="calculator"
                onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
            >

                <div className="calc_nav y_axis_center">
                    <div className="git_link">
                        <div className="github_icon x_y_axis_center">
                            <a
                                href="https://www.github.com/Viekesh"
                                className="x_y_axis_center"
                                target="_blanc"
                            >
                                <svg
                                    height="32"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="32"
                                    data-view-component="true"
                                    className="octicon octicon-mark-github v-align-middle"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="light_mode">
                        <div className="light_mode_toggle" onClick={convertDarkMode}>
                            <div
                                className={`light_mode_toggle_circle ${!isLightMode ? "light_mode_active" : ""}`}
                            ></div>
                        </div>

                        <img src={!isLightMode ? "sun_icon" : "moon_icon"} alt="" />
                    </div>
                </div>

                <CalcHeader expression={expression} result={result} history={history} />
                <CalcKeypad handleKeyPress={handleKeyPress} />
            </section>
        </>
    )
}



export default Calculator;
