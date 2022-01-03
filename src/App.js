import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
import { nanoid } from 'nanoid'

function App() {

  const [diceValues, setDiceValues] = useState(allNewDice());

  function allNewDice() {
    const newDiceValues = []
    for(let i = 0; i < 10; i++) {
      newDiceValues.push( {
        value: Math.ceil( Math.random() * 6 ), 
        isHeld: false,
        key: nanoid()
      })
    }
    return newDiceValues;
  }

  const diceElements = diceValues.map( diceElement => <Dice value={diceElement.value} key={diceElement.key} isHeld={diceElement.isHeld} /> );

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
