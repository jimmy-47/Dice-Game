import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RuleContainer>
   <h2>
   How to play dice game
   </h2>
   <div className='paragraph'>
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
    <p>if you get wrong guess then  2 point will be dedcuted </p>
   </div>

    </RuleContainer>
  )
}

export default Rules;
const RuleContainer=styled.div`
max-width:800px;
margin:0 auto;
padding:20px;
background-color:#FBF1F1;
border-radius:10px;
margin-top:40px;
h2{
    font-size:24px;
}
.paragraph{
      margin-top:24px;
}
   


`