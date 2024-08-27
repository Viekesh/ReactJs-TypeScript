



const CalcKeypad = (props) => {

    const keys = [
        {
            keyCode: 55,
            label: "7",
        },
        {
            keyCode: 56,
            label: "8",
        },
        {
            keyCode: 57,
            label: "9",
        },
        {
            keyCode: 52,
            label: "4",
        },
        {
            keyCode: 53,
            label: "5",
        },
        {
            keyCode: 54,
            label: "6",
        },
        {
            keyCode: 49,
            label: "1",
        },
        {
            keyCode: 50,
            label: "2",
        },
        {
            keyCode: 51,
            label: "3",
        },
        {
            keyCode: 48,
            label: "0",
        },
        {
            keyCode: 190,
            label: ".",
        },
        {
            keyCode: 13,
            label: "=",
        },
    ];

    const symbols = [
        {
            label: "⌫",
            keyCode: 8,
            value: "backspace",
        },
        {
            label: "÷",
            keyCode: 111,
            value: "/",
        },
        {
            label: "×",
            keyCode: 56,
            value: "*",
        },
        {
            label: "﹣",
            keyCode: 109,
            value: "-",
        },
        {
            label: "+",
            keyCode: 107,
            value: "+",
        },
    ];

    return (
        <>
            <div className="calc_keypad">

                <div className="keys">
                    {
                        keys.map((index, element) => {
                            return (
                                <>
                                    <p key={index} onClick={() => props.handleKeyPress(element.keyCode, element.label)}>
                                        {element.label}
                                    </p>
                                </>
                            )
                        })
                    }
                </div>

                <div className="keypad_symbol">
                    {
                        symbols.map((index, element) => {
                            return (
                                <>
                                    <p key={index} onClick={() => props.handleKeyPres(element.keyCode, element.value)}>
                                        {element.label}
                                    </p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};



export default CalcKeypad;