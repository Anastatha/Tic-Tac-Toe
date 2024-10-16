import React from 'react';
import FieldLayout from './FieldLayout.jsx';
import PropTypes from 'prop-types';

const Field = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};

export default Field;
