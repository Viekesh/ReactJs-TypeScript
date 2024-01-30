// import React, { useEffect, useState } from "react";
// import "./TicTacToe.css";
// import excited from "./Assets/excited.gif";



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

//     const [backgroundMusic, setBackgroundMusic] = useState(new Audio("./Assets/music.mp3"));
//     const [audioTune, setAudioTune] = useState(new Audio("./Assets/ting.mp3"));
//     const [gameOverTune, setGameOverTune] = useState(new Audio("./Assets/gameover.mp3"));
//     const [initialTurn, setInitialTurn] = useState("X");
//     const [isGameOver, setIsGameOver] = useState(false);
//     const [infoText, setInfoText] = useState(`Turn for ${initialTurn}`);
//     const [boxes, setBoxes] = useState(Array(9).fill(null));

//     useEffect(() => {
//         backgroundMusic.play();
//     }, []);

//     const handleClick = (index) => {
//         const newBoxes = [...boxes];
//         if (newBoxes[index] === null && !isGameOver) {
//             newBoxes[index] = initialTurn;
//             setBoxes(newBoxes);
//             setInitialTurn(changeTurn());
//             audioTune.play();
//             checkWin();
//             if (!isGameOver) {
//                 setInfoText(`Turn for ${initialTurn}`);
//             }
//         }
//     };

//     const changeTurn = () => {
//         return initialTurn === "X" ? "O" : "X";
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
//         ];

//         wins.forEach((win) => {
//             const [a, b, c] = win;
//             if (boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
//                 setInfoText(`${boxes[a]} Won`);
//                 setIsGameOver(true);
//                 gameOverTune.play();
//             }
//         });
//     };



//     const resetGame = () => {
//         setBoxes(Array(9).fill(null));
//         setIsGameOver(false);
//         setInitialTurn("X");
//         setInfoText(`Turn for ${initialTurn}`);
//     }



//     const renderBoxes = () => {
//         return boxes.map((value, index) => (
//             <div className="box" key={index} onClick={() => handleClick(index)}>
//                 {value ? <p className="box_text">{value}</p> : <p className="box_text" />}
//             </div>
//         ));
//     };



//     return (
//         <>
// <section className="tictactoe_navigation">
//     <nav>
//         <div class="logo">
//             <h1 class="x_y_axis_center">Tic Tac Toe</h1>
//         </div>
//     </nav>
// </section>

//             <section className="game_zone">

//                 <div className="game_content">
//                     <div className="game_info x_y_axis_center">
//                         <span class="info">Turn For X</span>
//                         <button id="reset" onClick={resetGame}>RESET</button>
//                     </div>
//                     <div className="img_box x_y_axis_center">
//                         <img src={excited} alt="" />
//                     </div>
//                 </div>

//                 <div className="line"></div>

// <div class="game_container x_y_axis_center">
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>

//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>

//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
//     <div className="box"><span className="box_text x_y_axis_center"></span></div>
// </div>
//             </section>
//         </>
//     )
// }



// export default TicTacToe;



import "./TicTacToe.css";
import Board from "./Board";
import { useState } from "react";
import "./Assets/music.mp3";
import Strike from "./Strike";



const Player_X = "X";
const Player_O = "O";

const TicTacToe = () => {

    // Initialise boxes for state management. In our initial state we have an array of 9 items
    const [boxes, setBoxes] = useState(Array(9).fill(null));

    const [playerTurn, setPlayerTurn] = useState(Player_X);

    const [isGameOver, setIsGameOver] = useState(false);

    const [initialTurn, setInitialTurn] = useState(Player_X);

    const [audioTune, setAudioTune] = useState(new Audio("./Assets/ting.mp3"));

    const renderBoxes = () => {
        return (
            boxes.map((value, index) => (
                <div className="box x_y_axis_center" key={index} onClick={() => onBoxClick(index)}>
                    {
                        value && <span className="box_text x_y_axis_center">{value}</span>
                    }
                </div>
            ))
        )
    }

    const changeTurn = () => {
        return initialTurn === "X" ? "O" : "X";
    };

    const onBoxClick = (index) => {
        const newBoxes = [...boxes];
        newBoxes[index] = playerTurn;
        setBoxes(newBoxes);
        playerTurn === Player_X ? setPlayerTurn(Player_O) : setPlayerTurn(Player_X);
        setInitialTurn(changeTurn());
        audioTune.play();
    };

    return (
        <>

            <section className="tictactoe_navigation x_y_axis_center">
                <div class="logo">
                    <h1 class="x_y_axis_center">Tic Tac Toe</h1>
                </div>
            </section>

            <section className="game_zone">
                <div className="game_container x_y_axis_center">
                    {renderBoxes()}
                </div>
            </section >

            <Strike />
        </>
    )
};



export default TicTacToe;
