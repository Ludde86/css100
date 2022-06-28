import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Main />
		</div>
	);
};

export default App;
