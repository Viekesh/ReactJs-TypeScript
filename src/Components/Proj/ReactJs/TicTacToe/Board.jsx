import Strike from "./Strike";



const Board = ({ boxes, onBoxClick }) => {

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

    return (
        <>
            {/* <div class="game_container x_y_axis_center">
                <div className="box x_y_axis_center"><span onClick={onBoxClick(0)} className="box_text x_y_axis_center" value={boxes[0]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(1)} className="box_text x_y_axis_center" value={boxes[1]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(2)} className="box_text x_y_axis_center" value={boxes[2]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(3)} className="box_text x_y_axis_center" value={boxes[3]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(4)} className="box_text x_y_axis_center" value={boxes[4]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(5)} className="box_text x_y_axis_center" value={boxes[5]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(6)} className="box_text x_y_axis_center" value={boxes[6]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(7)} className="box_text x_y_axis_center" value={boxes[7]}></span></div>
                <div className="box x_y_axis_center"><span onClick={onBoxClick(8)} className="box_text x_y_axis_center" value={boxes[8]}></span></div>
            </div> */}



            <div className="game_container x_y_axis_center">
                {renderBoxes()}
            </div>



            <Strike />
        </>
    )
}



export default Board;
