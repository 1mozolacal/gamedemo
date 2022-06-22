import logo from './logo.svg';
import './App.css';
import TextLog from './components/textLog/textLog'
import Dungeon from './components/dungoen/dungeon.js'
import MainDisplay from './components/mainDisplay/mainDisplay'
import PlayerStats from './components/playerStats/playerStats';
import GetGenericPlayer from './utils/player/genericPlayer'
import { useState } from 'react';

let state = {
  health: 100,
  items: {},
  level: 0,
  xp: 0,

}



function App() {

  const [player, setPlayer] = useState(GetGenericPlayer())

  let eventText = "" //set this to the text of a new event
  return (
    <div>
      <div className="App">
        <h1>Game 😋</h1>
        <PlayerStats {...player} />
        <MainDisplay player={player} setPlayer={setPlayer} />
        <TextLog text={eventText} />
      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
