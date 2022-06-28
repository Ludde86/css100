import React from 'react';
import './challenge.css';

const Challenge = () => {
	return (
		<div className="challenge">
			<div className="challenge__numbers">
				<div className="challenge__numbers_nr1-dot" />
				<div className="challenge__numbers_nr1" />
				<div id="nr01" className="challenge__numbers_nr0" />
				<div id="nr02" className="challenge__numbers_nr0" />
			</div>
			<h1 className="challenge__title">DAYS</h1>
			<h6 className="challenge__text">CSS CHALLENGE</h6>
		</div>
	);
};

export default Challenge;
