import React from "react";



const NumberedButtons = ({ num }) => {

    let n = 0;

    let elem = [];

    while (n < num) {
        elem.push(num);
        n++
    };

    return (
        <>
            <div className="button_set">
                {
                    elem.map((e, i) => (
                        <button key={i}>{e}</button>
                    ))
                }
            </div>
        </>
    )
}



export default NumberedButtons;