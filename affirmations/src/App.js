import './App.css';
import {affirmations} from './Affirmations'

function App() {
const randomNum = Math.floor(Math.random() * Math.floor(affirmations.length))
  return (
    <div className="App">
      <h1>{affirmations[randomNum]}</h1>
    </div>
  );
}

export default App;
