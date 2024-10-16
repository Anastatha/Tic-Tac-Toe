import React from 'react';
import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победитель: ${currentPlayer === 'X' ? '0' : 'X'}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

export default Information;
