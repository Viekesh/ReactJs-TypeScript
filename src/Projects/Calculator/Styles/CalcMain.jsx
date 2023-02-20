import styled from "styled-components";

export const CalcContainer = styled.div`
  border: 2px solid red;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  min-height: 500px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(100px, auto) repeat(5, 80px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const CalcScreen = styled.div`
  border: 2px solid blue;
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CalcPrevious = styled.div`
  border: 2px solid green;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const CalcCurrent = styled.div`
  border: 2px solid pink;
  color: white;
  font-size: 2.5rem;
`;

export const CalcButton = styled.button`
  cursor: pointer;
  color: snow;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: 2px outset white;
  border-radius: 30%;
  background-color: black;
  &:hover {
    background-color: red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${({gridSpan}) => {
    if(gridSpan) {
      return `grid-column: span ${gridSpan}`
    }
  }}

  ${({operation}) => {
    return operation && `background-color: blue;`
  }}

  ${({control}) => {
    return control && `background-color: blue;`
  }}
`;

