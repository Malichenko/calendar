// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// Components
import { Scheduler } from './Layouts/Scheduler/Scheduler';
// Store
import { store } from 'Init/store';
// Styles
import 'Styles/main.scss';
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Scheduler />
		</Router>
	</Provider>,
	document.getElementById('root')
);
