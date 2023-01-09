import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Japan from './components/Japan';
import Thailand from './components/Thailand';
import Usa from './components/Usa';
import Taiwan from './components/Taiwan';
import Finland from './components/Finland';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/japan" element={<Japan />} />
				<Route path="/thailand" element={<Thailand />} />
				<Route path="/usa" element={<Usa />} />
				<Route path="/taiwan" element={<Taiwan />} />
				<Route path="/finland" element={<Finland />} />
			</Routes>
		</div>
	);
}

export default App;
