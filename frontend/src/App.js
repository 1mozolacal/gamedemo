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

  const [messages, setMessages] = useState([{ text: "Welcome to the dungeon" }])

  const [items, setItems] = useState([])

  function updateTextOld(obj) {
    if (obj.hasOwnProperty("text")) {
      var oldMessages = messages
      oldMessages.push(obj)
      setMessages(oldMessages)
      // text.push(<p>{obj.text} <br/></p>)
    } else {
      console.log("OBJECT MUST HAVE TEXT PARAM")
    }
  }
  
  // function updateText(obj) {
  //   if (obj.hasOwnProperty("text")) {
  //     text.push(<p>{'>'}{'>'} {obj.text} <br /></p>)
  //   } else {
  //     console.log("OBJECT MUST HAVE TEXT PARAM")
  //   }
  // }

  function pushMultipleMessages(msgs) {
    const filtered = msgs.filter(item => item.hasOwnProperty('text'))
    const combine = messages.concat(filtered)
    setMessages(combine)
  }
  return (
    <div>
      <div id="sidebar"></div>
      <div className="App">
        <Grid container spacing={2}>

          <Grid item sm={12} md={12} xs={12} lg={3}>
            <PlayerStats {...player} />
          </Grid>
          <Grid item sm={12} md={12} xs={12} lg={5}>
            <MainDisplay player={player} setPlayer={setPlayer} pushMessages={pushMultipleMessages} />
          </Grid>
          <Grid item sm={12} md={12} xs={12} lg={4}>
            <TextLog messages={messages.reverse()} />
          </Grid>
        </Grid>

      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
