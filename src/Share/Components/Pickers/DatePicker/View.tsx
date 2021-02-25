// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { IconButton, InputAdornment } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { materialTheme } from '../ThemeStyle';
import cx from 'classnames';
import { ThemeProvider } from '@material-ui/styles';
// Utils
import { DATE } from 'Constants/pickers';
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
	selectedDate = new Date(),
	handleDateChange,
	onlyIcon,
	label = 'Date',
	setFieldValue
}) => {
	const handler = (date: Date | null) => {
		handleDateChange(date);
		if (setFieldValue) {
			setFieldValue(DATE, date);
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
					<CalendarTodayIcon fontSize="large" />
				</IconButton>
			)}

			<div
				className={cx({
					[Styles['hidden']]: onlyIcon
				})}
			>
				<ThemeProvider theme={materialTheme}>
					<DatePicker
						variant="inline"
						open={isOpen}
						label={label}
						onOpen={() => setIsOpen(true)}
						onClose={() => setIsOpen(false)}
						format="d MMM yyyy"
						value={selectedDate}
						onChange={handler}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<CalendarTodayIcon fontSize="large" />
								</InputAdornment>
							)
						}}
					/>
				</ThemeProvider>
			</div>
		</MuiPickersUtilsProvider>
	);
};
