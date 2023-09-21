import React, { useState } from 'react'
import styled from 'styled-components'


function RollDice({rollDice,currentDice}) {


  return (
    <RollContainer>
    <div className='img'>
        <img 
        onClick={rollDice}
        src={`/src/assets/dice_${currentDice}.png`} alt='dice 1'/>
        <p>Click on Dice to roll</p>
    </div>
    
    
    </RollContainer>
  )
}

export default RollDice;
const RollContainer=styled.div`
     display:flex;
     justify-content:center;
     margin-top:54px;
     p{
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
     }
`