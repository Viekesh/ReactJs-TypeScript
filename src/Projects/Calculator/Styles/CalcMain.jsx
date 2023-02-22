import styled from "styled-components";

export const CalcContainer = styled.div`
  border: 2px solid red;
  margin: 0px auto;
  width: 99vw;
//   display: grid;
//   justify-content: center;
//   align-content: center;
//   min-height: 100vh;
//   grid-template-columns: repeat(4, 100px);
//   grid-template-rows: minmax(100px, auto) repeat(5, 80px);
//   box-shadow: 2px 2px 10px #333;
//   border-radius: 10px;
// `;

export const CalcScreen = styled.div`
  border: 2px solid blue;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  margin: 0.3em;
  padding: 10px;
  grid-column: 1 / -1;
  background-color: rgba(3, 3, 3, 0.75);
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  
  // display: flex;
  // justify-content: space-around;
  // flex-direction: column;
// `;

export const CalcPrevious = styled.div`
  border-radius: 1em;
  padding: 0.3em;
  width: 100%;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.3em;
`;

export const CalcCurrent = styled.div`
  border-radius: 1em;
  padding: 0.3em;
  color: white;
  font-size: 2em;
`;

export const CalcButton = styled.button`
  border: 2px outset white;
  border-radius: 30%;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;

  // display: flex;
  // align-items: center;
  // justify-content: center;

  // color: snow;
  // outline: none;
  // background-color: black;
  // &:hover {
  //   background-color: red;
  // }
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

