import { GameState } from "./GameState";



const GameOver = ({ gameState }) => {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerOWins:
            return <><div className="game_over">O Wins</div></>
        case GameState.playerXWins:
            return <><div className="game_over">X Wins</div></>
        case GameState.draw:
            return <><div className="game_over">Draw</div></>
        default:
            return <></>
    }
}



export default GameOver;