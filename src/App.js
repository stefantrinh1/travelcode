import React from 'react';
import Switcher from './components/Switcher';
import './App.css';
import { ThemeContainer } from './components/Themes/ThemeProvider';
import GlobalStyles from './globalStyles';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<ThemeContainer>
			<GlobalStyles />
			<AppRouter />
			<Switcher />
		</ThemeContainer>
	);
}

export default App;
