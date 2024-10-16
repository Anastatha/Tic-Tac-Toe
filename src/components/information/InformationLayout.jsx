import React from 'react';
import './Information.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ status }) => {
	return <div className='information'>{status}</div>;
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};

export default InformationLayout;
