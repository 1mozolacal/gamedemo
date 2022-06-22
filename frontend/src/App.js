import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import TextLog from './components/textLog/textLog'
import Dungeon from './components/dungoen/dungeon.js'
import MainDisplay from './components/mainDisplay/mainDisplay'
import PlayerStats from './components/playerStats/playerStats';
import GetGenericPlayer from './utils/player/genericPlayer'

import { useState } from 'react';

function App() {  
  const [player, setPlayer] = useState(GetGenericPlayer())

  const [text, setText] = useState(0)

  function updateText(newText){
    text.push(<p>{newText} <br/></p>)
  }
  return (
    <div>
      <div id="sidebar"></div>
      <div className="App">
      <Grid container spacing={2}>
                
        <Grid item sm={12} md={12} xs={12} lg={3}>
          <PlayerStats {...player} />
        </Grid>
        <Grid item sm={12} md={12}xs={12}lg={5}>
          <MainDisplay player={player} setPlayer={setPlayer} />
        </Grid>
        <Grid item sm={12} md={12} xs={12}lg={4}>
          <TextLog text={text} />
        </Grid>
      </Grid>
            
      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
