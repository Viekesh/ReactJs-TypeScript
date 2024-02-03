import "./TicTacToe.css";
import Board from "./Board";
import { useEffect, useState } from "react";
import music from "./Assets/music.mp3";
import ting from "./Assets/ting.mp3";
import gameover from "./Assets/gameover.mp3";
import Strike from "./Strike";
import { GameState } from "./GameState";
import GameOver from "./GameOver";
import Reset from "./Reset";



const Player_X = "X";
const Player_O = "O";



const TicTacToe = () => {

    // Initialise boxes for state management. In our initial state we have an array of 9 items
    const [boxes, setBoxes] = useState(Array(9).fill(null));

    const [playerTurn, setPlayerTurn] = useState(Player_X);

    const [isGameOver, setIsGameOver] = useState(false);

    const [gameOverTune, setGameOverTune] = useState(new Audio(gameover));

    const [infoText, setInfoText] = useState(`Turn for ${playerTurn}`);

    const [initialTurn, setInitialTurn] = useState(Player_X);

    const [audioTune, setAudioTune] = useState(new Audio(ting));

    const [audioTune2, setAudioTune2] = useState(new Audio(music));

    const [strikeClass, setStrikeClass] = useState("");

    const [gameState, setGameState] = useState(GameState.inProgress);



    const changeTurn = () => {
        return initialTurn === "X" ? "O" : "X";
    };



    const onBoxClick = (index) => {
        if (gameState !== GameState.inProgress) {
            return;
        }

        if (boxes[index] !== null) {
            return;
        }

        if (!isGameOver && playerTurn === "X") {
            setInfoText(`Turn for O`);
        } else {
            setInfoText(`Turn for X`);
        }

        const newBoxes = [...boxes];
        newBoxes[index] = playerTurn;
        setBoxes(newBoxes);
        playerTurn === Player_X ? setPlayerTurn(Player_O) : setPlayerTurn(Player_X);
        audioTune.play();
        setInitialTurn(changeTurn());
    };



    const WinCombo = [
        // Rows
        {
            combo: [0, 1, 2],
            strikeClass: "strike-row-1"
        },
        {
            combo: [3, 4, 5],
            strikeClass: "strike-row-2"
        },
        {
            combo: [6, 7, 8],
            strikeClass: "strike-row-3"
        },

        // Column
        {
            combo: [0, 3, 6],
            strikeClass: "strike-column-1"
        },
        {
            combo: [1, 4, 7],
            strikeClass: "strike-column-2"
        },
        {
            combo: [2, 5, 8],
            strikeClass: "strike-column-3"
        },

        // Diogonal
        {
            combo: [0, 4, 8],
            strikeClass: "strike-diagonal-1"
        },
        {
            combo: [2, 4, 6],
            strikeClass: "strike-diagonal-2"
        },
    ]



    const checkWinner = (boxes, setStrikeClass) => {
        // console.log("Check Win")
        for (const { combo, strikeClass } of WinCombo) {
            const boxValue1 = boxes[combo[0]];
            const boxValue2 = boxes[combo[1]];
            const boxValue3 = boxes[combo[2]];

            if (boxValue1 !== null && boxValue1 === boxValue2 && boxValue1 === boxValue3) {
                setStrikeClass(strikeClass);
                if (boxValue1 === Player_X) {
                    setGameState(GameState.playerXWins);
                } else {
                    setGameState(GameState.draw);
                }

                if (boxValue1 === Player_O) {
                    setGameState(GameState.playerOWins);
                }
            }
        }

        const boxesWithPlayers = boxes.every((box) => box !== null);
        if (boxesWithPlayers) {
            setGameState(GameState.draw);
        }
    }



    useEffect(() => {
        checkWinner(boxes, setStrikeClass);
        // if (gameState !== GameState.inProgress) {
        //     gameOverTune.play();
        // } else {
        //     audioTune2.play();
        // }
        gameState !== GameState.inProgress ? gameOverTune.play() : audioTune2.play();
    }, [boxes])

    // useEffect(() => {
    //     if (boxes.some((box) => box !== null)) {
    //         audioTune.play();
    //     }
    // }, [boxes]);

    // useEffect(() => {
    //     if (gameState !== GameState.inProgress) {
    //         gameOverTune.play();
    //     }
    // }, [gameState]);

    const handleReset = () => {
        setGameState(GameState.inProgress);
        setBoxes(Array(9).fill(null));
        setPlayerTurn(Player_X);
        setStrikeClass(null);
    };



    return (
        <>
            <section className="tictactoe_navigation x_y_axis_center">
                <div class="logo">
                    <h1 class="x_y_axis_center">Tic Tac Toe</h1>
                </div>
            </section>

            <div>
                <span className="info">{infoText}</span>
            </div>

            <section className="game_zone">
                <Board boxes={boxes} onBoxClick={onBoxClick} />
            </section >

            <Strike strikeClass={strikeClass} />

            <GameOver gameState={gameState} />

            <Reset gameState={gameState} onReset={handleReset} />
        </>
    )
};



export default TicTacToe;

