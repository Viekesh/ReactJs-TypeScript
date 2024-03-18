// import React, { useEffect, useState } from "react";
// import "./TicTacToe.css";



// const TicTacToe = () => {

//     const [backgroundMusic, setBackgroundMusic] = useState(new Audio("./Assets/music.mp3"));

//     const [audioTune, setAudioTune] = useState(new Audio("./Assets/ting.mp3"));

//     const [gameOverTune, setGameOverTune] = useState(new Audio("./Assets/gameover.mp3"));

//     const [initialTurn, setInitialTurn] = useState("X");

//     const [isGameOver, setIsGameOver] = useState(false);

//     const [infoText, setInfoText] = useState(`Turn for ${initialTurn}`);

//     // Initialise boxes for state management
//     const [boxes, setBoxes] = useState(Array(9).fill(null));

//     useEffect(() => {
//         backgroundMusic.play();
//     }, []);

//     const handleClick = (index) => {
//         const newBoxes = [...boxes];
//         if (newBoxes[index] === null && !isGameOver) {
//             newBoxes[index] = initialTurn;
//             setBoxes(newBoxes);
//             setInitialTurn(changeTurn);
//             audioTune.play();
//             checkWin();
//             if (!isGameOver) {
//                 setInfoText(`Turn for ${initialTurn}`);
//             };
//         }
//     }

//     const changeTurn = () => {
//         return initialTurn === "X" ? "0" : "X";
//     };

//     const checkWin = () => {
//         const wins = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ]

//         wins.forEach((win) => {
//             const [a, b, c] = win;
//             if (boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
//                 setInfoText(`${boxes[a]} Won`);
//                 setIsGameOver(true);
//                 gameOverTune.play();
//             }
//         });
//     }



//     const resetGame = () => {
//         setBoxes(Array(9).fill(null));
//         setIsGameOver(false);
//         setInitialTurn("X");
//         setInfoText(`Turn for ${initialTurn}`);
//     }



//     const renderBoxes = () => {
//         return boxes.map((value, index) => { })
//     }

//     return (
//         <>
//             <header className="tictactoe_navigation">
//                 <nav>
//                     <div class="logo">
//                         <h1 class="x_y_axis_center">Tic Tac Toe</h1>
//                     </div>
//                 </nav>
//             </header>

//             <main>
//                 <section class="game_zone">
//                     <div class="game_content">
//                         <h2>Welcome To Tic Tac Toe</h2>
//                         <div class="game_info">
//                             <span class="info">Turn For X</span>
//                             <button id="reset">RESET</button>
//                         </div>

//                         <div class="img_box">
//                             <img src="../Files/excited.gif" alt="" />
//                         </div>
//                     </div>

//                     <div class="line"></div>

//                     <div class="game_container">
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>

//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>

//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                         <div class="box"><span class="box_text x_y_axis_center"></span></div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }



// export default TicTacToe;









// Certainly! It looks like there are a few missing parts, such as the event listener for the reset button and the proper implementation for resetting the game.Additionally, the`renderBoxes` function has a redundant loop that needs correction.Here's the completed code:

import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import excited from "./Assets/excited.gif";

const TicTacToe = () => {
    const [backgroundMusic, setBackgroundMusic] = useState(new Audio("./Assets/music.mp3"));
    const [audioTune, setAudioTune] = useState(new Audio("./Assets/ting.mp3"));
    const [gameOverTune, setGameOverTune] = useState(new Audio("./Assets/gameover.mp3"));
    const [initialTurn, setInitialTurn] = useState("X");
    const [isGameOver, setIsGameOver] = useState(false);
    const [infoText, setInfoText] = useState(`Turn for ${initialTurn}`);
    const [boxes, setBoxes] = useState(Array(9).fill(null));

    useEffect(() => {
        backgroundMusic.play();
    }, []);

    const changeTurn = () => {
        return initialTurn === "X" ? "O" : "X";
    };

    const renderBoxes = () => {
        return boxes.map((value, index) => (
            <div className="box" key={index} onClick={() => handleClick(index)}>
                {value ? <p className="box_text">{value}</p> : <p className="box_text" />}
            </div>
        ));
    };



    const handleClick = (index) => {
        const newBoxes = [...boxes];
        if (newBoxes[index] === null && !isGameOver) {
            newBoxes[index] = initialTurn;
            setBoxes(newBoxes);
            setInitialTurn(changeTurn());
            audioTune.play();
            checkWin();
            if (!isGameOver) {
                setInfoText(`Turn for ${initialTurn}`);
            }
        }
    };

    const checkWin = () => {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        wins.forEach((win) => {
            const [a, b, c] = win;
            if (boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                setInfoText(`${boxes[a]} Won`);
                setIsGameOver(true);
                gameOverTune.play();
            }
        });
    };

    const resetGame = () => {
        setBoxes(Array(9).fill(null));
        setIsGameOver(false);
        setInitialTurn("X");
        setInfoText(`Turn for X`);
    };



    return (
        <>
            <section className="tictactoe_navigation">
                <nav>
                    <div className="logo">
                        <h1 className="x_y_axis_center">Tic Tac Toe</h1>
                    </div>
                </nav>
            </section>

            <section className="game_zone">
                <div className="game_content">
                    <div className="game_info x_y_axis_center">
                        <span className="info">{infoText}</span>
                        <button id="reset" onClick={resetGame}>
                            RESET
                        </button>
                    </div>
                    <div className="img_box x_y_axis_center">
                        <img src={excited} alt="" />
                    </div>
                </div>

                <div className="line"></div>

                <div className="game_container x_y_axis_center">{renderBoxes()}</div>
            </section>
        </>
    );
};

export default TicTacToe;

// I added the event listener for the reset button, corrected the `changeTurn` function, and modified the
// renderBoxes function to remove the redundant loop.