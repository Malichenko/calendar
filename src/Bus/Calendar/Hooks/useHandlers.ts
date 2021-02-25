// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { add, sub } from 'date-fns';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useHandlers = (
	setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>
) => {
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	const setPrevMonth = () => {
		setSelectedDate((prev) => sub(prev as Date, { months: 1 }));
	};

	const setNextMonth = () => {
		setSelectedDate((prev) => add(prev as Date, { months: 1 }));
	};

	const handleGridClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.currentTarget as HTMLElement;
		const date = new Date(target.dataset.date as string);
		setSelectedDate(date);
	};

	return {
		handleDateChange,
		setPrevMonth,
		setNextMonth,
		handleGridClick
	};
};
