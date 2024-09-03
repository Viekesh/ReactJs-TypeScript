



const CalcKeypad = (props) => {

    const keys = [
        {
            id: "0",
            label: "7",
            keyCode: 55,
        },
        {
            id: "1",
            label: "8",
            keyCode: 56,
        },
        {
            id: "2",
            label: "9",
            keyCode: 57,
        },
        {
            id: "3",
            label: "⌫",
            keyCode: 8,
            value: "backspace",
        },
        {
            id: "4",
            label: "4",
            keyCode: 52,
        },
        {
            id: "5",
            label: "5",
            keyCode: 53,
        },
        {
            id: "6",
            label: "6",
            keyCode: 54,
        },
        {
            id: "7",
            label: "÷",
            keyCode: 111,
            value: "/",
        },
        {
            id: "8",
            label: "1",
            keyCode: 49,
        },
        {
            id: "9",
            label: "2",
            keyCode: 50,
        },
        {
            id: "10",
            label: "3",
            keyCode: 51,
        },
        {
            id: "11",
            label: "×",
            keyCode: 56,
            value: "*",
        },
        {
            id: "12",
            label: "0",
            keyCode: 48,
        },
        {
            id: "13",
            label: ".",
            keyCode: 190,
        },
        {
            id: "14",
            label: "=",
            keyCode: 13,
        },
        {
            id: "16",
            label: "+",
            keyCode: 107,
            value: "+",
        },
        {
            id: "15",
            label: "﹣",
            keyCode: 109,
            value: "-",
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
                        keys.map((element) => {
                            return (
                                <>
                                    <p
                                        className="x_y_axis_center"
                                        key={element.id}
                                        onClick={() => props.handleKeyPress(element.keyCode, element.label, element.value)}
                                    >
                                        {element.label}
                                    </p>
                                </>
                            )
                        })
                    }
                </div>

                {/* <div className="keypad_symbol">
                    {
                        symbols.map((index, element) => {
                            return (
                                <>
                                    <p
                                        key={index}
                                    // onClick={() => props.handleKeyPress(element.keyCode, element.value)}
                                    >
                                        {element.label}
                                    </p>
                                </>
                            )
                        })
                    }
                </div> */}
            </div>
        </>
    )
};



export default CalcKeypad;