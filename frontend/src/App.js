import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <PlayerStats {...player} />
        <MainDisplay player={player} setPlayer={setPlayer} />
        <TextLog text={text} />
      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
