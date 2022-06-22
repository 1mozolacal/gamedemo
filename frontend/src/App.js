import logo from './logo.svg';
import './App.css';
import TextLog from './components/textLog/textLog'
import Dungeon from './components/dungoen/dungeon.js'
import MainDisplay from './components/mainDisplay/mainDisplay'

let state = {
  health: 100,
  items: {},
  level: 0,
  xp: 0,

}



function App() {
  let eventText = "" //set this to the text of a new event
  return (
    <div>
      <div className="App">
        <h1>Game 😋</h1>
        <MainDisplay />
        <TextLog text={eventText}/>
      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
