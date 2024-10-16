import Field from '../field/Field.jsx';
import Information from '../information/Information.jsx';
import './GameLayout.css';
import PropTypes from 'prop-types';

const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
	resetGame,
}) => {
	return (
		<div className='game'>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={onCellClick} />
			<button className='restart' onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	onCellClick: PropTypes.func,
	resetGame: PropTypes.func,
};

export default GameLayout;
