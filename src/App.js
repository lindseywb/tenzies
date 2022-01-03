import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {

  const [diceValues, setDiceValues] = useState(allNewDice());

  function allNewDice() {
    const newDiceValues = []
    for(let i = 0; i < 10; i++) {
      newDiceValues.push( Math.ceil( Math.random() * 6 ) )
    }
    return newDiceValues;
  }

  const diceElements = diceValues.map( value => <Dice value={value} key={Math.random() * 99} /> );

  function rollDice() {
    setDiceValues( () => allNewDice() );
  }

  return (
    <main className="App">
      <div className="die-container">
        {diceElements}
      </div>

      <button className="btn-roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
