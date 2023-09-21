import styled from "styled-components"

export const Button=styled.button`
   width: 220px;
   padding: 10px 18px;
   border-radius: 5px;
   background: #000;
   color:#ffff;
   font-size:16px;
   border:1px solid white;
   cursor: pointer;
   &:hover{
    background-color:white;
    border:1px solid black;
    color:black;
   }
`;
export const OutlineButton=styled(Button)`
     background-color:white;
     border:1px solid black;
     color:black;
   &:hover{
    background-color:black;
    border:1px solid transparent;
    color:white;
   }
`