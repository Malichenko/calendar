// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { IconButton, InputAdornment } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { materialTheme } from '../ThemeStyle';
import cx from 'classnames';
import { ThemeProvider } from '@material-ui/styles';
// Urils
import { TIME } from 'Constants/pickers';
// Styles
import Styles from '../Styles.module.scss';
// Types
import { IPickersProps } from '../Types';
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC<IPickersProps> = ({
	isOpen,
	setIsOpen,
	selectedDate,
	handleDateChange,
	onlyIcon,
	label = 'Time',
	setFieldValue,
}) => {
	const handler = (date: Date | null) => {
		handleDateChange(date);
		if (setFieldValue) {
			setFieldValue(TIME, date);
		}
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			{onlyIcon && (
				<IconButton
					color="default"
					aria-label="add to shopping cart"
					onClick={() => setIsOpen(true)}
				>
					<AccessTimeIcon fontSize="large" />
				</IconButton>
			)}

			<div
				className={cx({
					[Styles['hidden']]: onlyIcon
				})}
			>
				<ThemeProvider theme={materialTheme}>
					<TimePicker
						variant="inline"
						open={isOpen}
						label={label}
						onOpen={() => setIsOpen(true)}
						onClose={() => setIsOpen(false)}
						value={selectedDate}
						onChange={handler}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<AccessTimeIcon fontSize="large" />
								</InputAdornment>
							)
						}}
					/>
				</ThemeProvider>
			</div>
		</MuiPickersUtilsProvider>
	);
};
