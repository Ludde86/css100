import React from 'react';
import Challenge from '../challenge/Challenge';
import './main.css';

const Main = () => {
	return (
		<div className="main">
			<div className="main__title-container">
				<h1>CHALLENGE #1</h1>
				<p>An easy start into the challenge with a custom build number with gradient.</p>
			</div>

			<div className="main__challenge-container">
				<Challenge />
			</div>
		</div>
	);
};

export default Main;
