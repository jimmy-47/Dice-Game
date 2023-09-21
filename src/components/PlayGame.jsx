import React from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { useState } from 'react';
import { Button, OutlineButton } from './styled/ButtonStyle';
import Rules from './Rules';

function PlayGame() {
  const [currentDice, setCurrentDice]=useState(1);
  const [selectedNumber, setSelectedNumber]=useState();
  const [score,setScore]=useState(0);
  const [error,setError]=useState("");
  const[showRules,setShowRules]=useState(false);
   
  
  const generateRandomNumber=(min,max)=>{
    console.log(Math.floor(Math.random()*(max-min)+min))
    return Math.floor(Math.random()*(max-min)+min);
}
   const rollDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      if(prev<=0){
        setScore(0);
      }
      else{
        setScore((prev) => prev - 2);
      }
    }

    setSelectedNumber(undefined);
  };

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <Main>
        <div className='top-box'>
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
         />
        </div>
        <RollDice
        rollDice={rollDice}
        currentDice={currentDice}
         />

         <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={()=>setShowRules((prev)=>!prev)}
          >{!showRules?"Show Rules":"Hide Rules"}</Button>
        {showRules &&   <Rules />}

         </div>
    </Main>
  )
}

export default PlayGame;

const Main=styled.div`
padding-top:64px;

.top-box{
    display:flex;
   justify-content:space-around;
   align-items:center;
}
.btns{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:24px;
  margin-top:36px;
  font-size: 16px;
  font-weight: 600;
}
`
      