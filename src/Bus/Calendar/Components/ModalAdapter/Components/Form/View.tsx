// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { TextField } from 'formik-material-ui';
import { ThemeProvider } from '@material-ui/core/styles';
import { FormGroup } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, Button, InputAdornment } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import TitleIcon from '@material-ui/icons/Title';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
// Components
import { TimePicker } from 'Share/Components/Pickers/TimePicker';
import { DatePicker } from 'Share/Components/Pickers/DatePicker';
// Hooks
import { useForm } from 'Bus/Calendar/Hooks/useForm';
// Utils
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
// Styles
import { theme } from './Theme';
// -----------------------------------------------------------------------------
// Current
// -----------------------------------------------------------------------------
interface Values {
	title: string;
	description: string;
}
const names: Record<keyof Values, string> = {
	title: 'title',
	description: 'description'
};
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC = () => {
	const {
		_event,
		isDatePickerOpen,
		toggleDatePicker,
		isTimePickerOpen,
		toggleTimePicker,
		selectedDate,
		selectedTime,
		handleDateChange,
		handleTimeChange,
		handleSubmit,
		handleDelete
	} = useForm();

	return (
		<ThemeProvider theme={theme}>
			<Formik
				initialValues={_event || initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						setSubmitting(false);
						handleSubmit(values);
					}, 500);
				}}
			>
				{({ submitForm, isSubmitting, setFieldValue }) => (
					<Form>
						<Field
							component={TextField}
							name={names.title}
							type="text"
							label="Title *"
							autoComplete={'off'}
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<TitleIcon fontSize="large" />
									</InputAdornment>
								)
							}}
						/>

						<Field
							component={TextField}
							aria-label="minimum height"
							placeholder="Add some text"
							type="text"
							label="Description"
							multiline={true}
							name={names.description}
							autoComplete={'off'}
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<DescriptionIcon fontSize="large" />
									</InputAdornment>
								)
							}}
						/>

						<FormGroup row={true}>
							<Field
								component={DatePicker}
								isOpen={isDatePickerOpen}
								setIsOpen={toggleDatePicker}
								selectedDate={selectedDate}
								handleDateChange={handleDateChange}
								setFieldValue={setFieldValue}
								label="Date *"
							/>

							<Field
								component={TimePicker}
								isOpen={isTimePickerOpen}
								setIsOpen={toggleTimePicker}
								selectedDate={selectedTime}
								handleDateChange={handleTimeChange}
								setFieldValue={setFieldValue}
								label="Time"
							/>
						</FormGroup>

						{!isSubmitting ? (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}
							>
								<Button
									variant="contained"
									size="small"
									disabled={isSubmitting}
									onClick={submitForm}
									startIcon={<SaveIcon />}
								>
									Save
								</Button>

								{_event && (
									<Button
										variant="contained"
										size="small"
										color="secondary"
										onClick={handleDelete}
										startIcon={<DeleteIcon />}
									>
										Delete
									</Button>
								)}
							</div>
						) : (
							<LinearProgress />
						)}
					</Form>
				)}
			</Formik>
		</ThemeProvider>
	);
};
