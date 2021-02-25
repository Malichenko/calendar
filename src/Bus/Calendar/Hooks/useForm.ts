// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Utils
import { initialValues } from '../Components/ModalAdapter/Components/Form/initialValues';
// Actions
import { eventActions } from '../actions';
// Types
import { TRootReducer } from 'Init/rootReducer';
import { TEvent } from '../Types';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useForm = () => {
	const { event } = useSelector((state: TRootReducer) => state.eventReducer);
	const _event = event as TEvent;
	const dispatch = useDispatch();
	const [isDatePickerOpen, toggleDatePicker] = useState<boolean>(false);
	const [isTimePickerOpen, toggleTimePicker] = useState<boolean>(false);
	const [selectedDate, toggleSelectedDate] = useState<Date>(
		_event?.date ? _event.date : initialValues.date
	);
	const [selectedTime, toggleSelectedTime] = useState<Date>(
		_event?.time ? _event.time : initialValues.time
	);

	const handleDateChange = (date: Date) => {
		toggleSelectedDate(date);
	};
	const handleTimeChange = (date: Date) => {
		toggleSelectedTime(date);
	};

	const handleSubmit = (values: TEvent) => {
		if (!_event) {
			dispatch(eventActions.createEvent(values));
		} else {
			dispatch(eventActions.editEvent(values));
		}
	};

	const handleDelete = () => {
		dispatch(eventActions.deleteEvent(_event));
	};
	return {
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
	};
};
