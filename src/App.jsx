import styled from 'styled-components'
import GameDashboard from './components/GameDashboard'
import { useState } from 'react'
import PlayGame from './components/PlayGame';
function App() {
  const [gamePlay, setGamePlay]=useState(false);

  function toggleViewer(){
    setGamePlay(prev=>!prev);
  }
  return (
    <>
      { gamePlay?(<PlayGame />):(<GameDashboard toggle={toggleViewer} />)
      }
    </>
  )
}
export default App
