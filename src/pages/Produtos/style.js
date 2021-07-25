import styled from "styled-components";

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  width: 300px;
  text-align: left;
  box-sizing: border-box;
  background: #fffff5;  
  border: 2px outset ;

  & .remove{
    grid-column: 1;
    & button{
      width: 40%;
      height: auto;
      background: #ef3b2d;
      color: #fff;
      font-size: 0.8rem;
      border: none;      
      margin: 0px 0px;
      padding: 2px;
      cursor: pointer;
    }
  }
  & span{
    display: block;
    padding: 2px 0px;
    font-weight: 500;
    font-size: 1rem;
    font-weight: bold;
  }
`