import {useState} from "react";
import { CalcContainer, CalcScreen, CalcPrevious, CalcCurrent, CalcButton } from "../Styles/CalcMain";

const Calculator = () => {

  const [calcCurrentV, setCalcCurrentV] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    console.log(value);
  }

  return (
    <>
    <div className='calc'>
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
    </div>
    </>
  )
}

export default Calculator;


