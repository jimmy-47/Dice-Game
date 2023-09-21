import React from 'react'
import styled from 'styled-components'
import image from '../assets/dices.png'
import { Button } from './styled/ButtonStyle'


function GameDashboard({toggle}) {
  return (
    <Container>
      <div>
      <img src={image} />
      </div>

      <div className='heading'>
        <h1> DICE GAME </h1>
        <Button onClick={toggle}> Play Now </Button>
      </div>
      
    </Container>
  )
}

export default GameDashboard
const Container=styled.div`
  max-width:1182px;
  height:100vh;
  display: flex;
  justify-content:center;
  align-items:center;
 gap: 10px;
 margin:0 auto;
 
 .heading{
    h1{
       font-size: 96px;
       white-space:nowrap;
    }
 }
`


