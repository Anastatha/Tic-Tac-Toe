import React from 'react';
import { useState } from 'react';
import './App.css';
import GameLayout from './components/game/GameLayout.jsx';

const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		checkWinner(newField);
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	};

	const checkWinner = (newField) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // горизонталь
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // вертикаль
			[0, 4, 8],
			[2, 4, 6], // диагональ
		];

		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c]
			) {
				setIsGameEnded(true);
				return;
			}
		}

		if (!newField.includes('')) {
			setIsDraw(true);
			setIsGameEnded(true);
		}
	};

	const resetGame = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onCellClick={handleCellClick}
			resetGame={resetGame}
		/>
	);
};

export default App;
