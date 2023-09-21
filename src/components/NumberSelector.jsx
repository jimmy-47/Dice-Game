import React, { useState } from 'react'
import styled from 'styled-components';
function NumberSelector({selectedNumber,setSelectedNumber,error,setError}) {
    const array=[1,2,3,4,5,6]
   const errorhandling=(value)=>{
    setSelectedNumber(value);
    setError("");
   }
  return (
    <NumberSelectorContainer>
    <p className='err'>{error}</p>
      <div className='flex'>
      {
        array.map((value,i)=>(
            <Box 
            isselected={value===selectedNumber}
            key={i}
            onClick={()=>errorhandling(value)}
            >{value}</Box>
        ))
       }
      </div>
       <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;
const NumberSelectorContainer=styled.div`
  .flex{
    display:flex;
    gap:24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
    display:flex;
    justify-content:flex-end;
    
  }
  .err{
    color:red;
  }
`
const Box=styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid #000;
    display:grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=>props.isselected ?"black" :"white"};
   color: ${(props)=>(!props.isselected ?"black" :"white")};
    
`
