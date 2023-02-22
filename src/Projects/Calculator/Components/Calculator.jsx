import {useState} from "react";
import "./Calculator.scss";


const Calculator = () => {

  const [calcCurrentV, setCalcCurrentV] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.value;
    setCalcCurrentV(value);
  }

  return (
    <>
    <div className="calc">
      <div className="calc_elements">

        <div className="calc_screen">
          <div className="calc_previous">11</div>
          <div className="calc_current">{calcCurrentV}</div>
        </div>

        <div className="calc_buttons">
          <button className="calc_button control" onClick={appendValueHandler}>AC</button>
          <button className="calc_button" onClick={appendValueHandler}>DEL</button>
          <button className="calc_button" onClick={appendValueHandler}>/</button>
          <button className="calc_button" onClick={appendValueHandler}>7</button>
          <button className="calc_button" onClick={appendValueHandler}>8</button>
          <button className="calc_button" onClick={appendValueHandler}>9</button>
          <button className="calc_button" onClick={appendValueHandler}>*</button>
          <button className="calc_button" onClick={appendValueHandler}>4</button>
          <button className="calc_button" onClick={appendValueHandler}>5</button>
          <button className="calc_button" onClick={appendValueHandler}>6</button>
          <button className="calc_button" onClick={appendValueHandler}>+</button>
          <button className="calc_button" onClick={appendValueHandler}>1</button>
          <button className="calc_button" onClick={appendValueHandler}>2</button>
          <button className="calc_button" onClick={appendValueHandler}>3</button>
          <button className="calc_button" onClick={appendValueHandler}>-</button>
          <button className="calc_button" onClick={appendValueHandler}>.</button>
          <button className="calc_button" onClick={appendValueHandler}>0</button>
          <button className="calc_button control" onClick={appendValueHandler}>=</button>
        </div>
      </div>
    </div>
    {/* <div className='calc'>
        <CalcContainer>
            <CalcScreen>
                <CalcPrevious>10</CalcPrevious>
                <CalcCurrent>22</CalcCurrent>
            </CalcScreen>
            <CalcButton gridSpan={2}>AC</CalcButton>
            <CalcButton>DEL</CalcButton>
            <CalcButton operation>/</CalcButton>
            <CalcButton data={7} onClick={appendValueHandler}>7</CalcButton>
            <CalcButton data={8} onClick={appendValueHandler}>8</CalcButton>
            <CalcButton data={9} onClick={appendValueHandler}>9</CalcButton>
            <CalcButton operation>*</CalcButton>
            <CalcButton data={4} onClick={appendValueHandler}>4</CalcButton>
            <CalcButton data={5} onClick={appendValueHandler}>5</CalcButton>
            <CalcButton data={6} onClick={appendValueHandler}>6</CalcButton>
            <CalcButton operation>+</CalcButton>
            <CalcButton data={1} onClick={appendValueHandler}>1</CalcButton>
            <CalcButton data={2} onClick={appendValueHandler}>2</CalcButton>
            <CalcButton data={3} onClick={appendValueHandler}>3</CalcButton>
            <CalcButton operation>-</CalcButton>
            <CalcButton>.</CalcButton>
            <CalcButton onClick={appendValueHandler}>0</CalcButton>
            <CalcButton gridSpan={2}>=</CalcButton>
        </CalcContainer>
    </div> */}
    </>
  )
}

export default Calculator;


