import React from 'react';
import './Field.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className='field_wrapper'>
			{field.map((cell, index) => (
				<button
					className='field_square'
					key={index}
					onClick={() => onCellClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};

export default FieldLayout;
