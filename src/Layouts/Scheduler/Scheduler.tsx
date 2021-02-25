// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { Provider } from 'react-redux';
// Init
import { store } from 'Init/store';
import { Calendar } from 'Bus/Calendar';
// Styles
import Styles from './Styles.module.scss';
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const Scheduler = () => {
	return (
		<Provider store={store}>
			<div className={Styles.container}>
				<Calendar />
			</div>
		</Provider>
	);
};
