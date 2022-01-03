import { useState, useEffect } from 'react';
import './App.css';
import Dice from './components/Dice';
import { nanoid } from 'nanoid'

function App() {

	const [dice, setDiceValues] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

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

	function rollDice() {
		setDiceValues( prevDice => prevDice.map(die => {
			return ! die.isHeld ? { 
				value: Math.ceil( Math.random() * 6 ),
				isHeld: false,
				id: nanoid()
			} : die
		}));
	}

	function holdDice(id) {
		setDiceValues( prevValues => prevValues.map(die => {
			return die.id === id ? { ...die, isHeld: ! die.isHeld } : die
		}))
	}

	const diceElements = dice.map( diceElement => <Dice value={diceElement.value} key={diceElement.id} isHeld={diceElement.isHeld} id={diceElement.id} hold={holdDice} /> );

	return (
		<main className="App">
			<header>
				<h1 className="title">Tenzies</h1>
				<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			</header>
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
