import logo from './logo.svg';
import './App.css';
import Dungeon from './components/dungoen/dungeon.js'
import MainDisplay from './components/mainDisplay/mainDisplay'

let state = {
  health: 100,
  items: {},
  level: 0,
  xp: 0,

}

function App() {
  return (
    <div>
      <div className="App">
        <h1>Game 😋</h1>
        <MainDisplay />
      </div>
      <div id="info">

      </div>
    </div>
  );
}

export default App;
