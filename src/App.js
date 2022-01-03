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
				id: nanoid()
			})
		}
		return newDiceValues;
	}

	function holdDice(id) {
		setDiceValues( prevValues => prevValues.map(die => {
			return die.id === id ? { ...die, isHeld: ! die.isHeld } : die
		}))
	}

	const diceElements = diceValues.map( diceElement => <Dice value={diceElement.value} key={diceElement.id} isHeld={diceElement.isHeld} id={diceElement.id} hold={holdDice} /> );

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
