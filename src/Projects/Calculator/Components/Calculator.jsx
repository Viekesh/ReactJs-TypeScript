import { CalcContainer, CalcScreen, CalcPrevious, CalcCurrent, CalcButton } from "../Styles/CalcMain";

const Calculator = () => {
  return (
    <>
    <div className='calc'>
        <CalcContainer>
            <CalcScreen>
                <CalcPrevious>10</CalcPrevious>
                <CalcCurrent>22</CalcCurrent>
            </CalcScreen>
            <CalcButton>AC</CalcButton>
            <CalcButton>DEL</CalcButton>
            <CalcButton>/</CalcButton>
            <CalcButton>7</CalcButton>
            <CalcButton>8</CalcButton>
            <CalcButton>9</CalcButton>
            <CalcButton>*</CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
            <CalcButton></CalcButton>
        </CalcContainer>
    </div>
    </>
  )
}

export default Calculator;


