// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { useState } from 'react';
import {
	add,
	eachDayOfInterval,
	getDate,
	lastDayOfMonth,
	startOfMonth,
	sub
} from 'date-fns';
// Hooks
import { useQuery } from './useQuery';
import { useFilter } from './useFilter';
// Utils
import { getPrevMonthArr } from 'Utils/prev_month';
import { getNextMonthArr } from 'Utils/next_month';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useValues = () => {
	const query = useQuery();
	const queryDate = query.get('date');
	const [isOpen, setIsOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		queryDate ? new Date(query.get('date') as string) : new Date()
	);

	useFilter(selectedDate);

	const selectedDay = getDate(selectedDate as Date);
	const startOfSelectedMonth = startOfMonth(selectedDate as Date);
	const endOfSelectedMonth = lastDayOfMonth(selectedDate as Date);
	const selectedMonthArr = eachDayOfInterval({
		start: startOfSelectedMonth,
		end: endOfSelectedMonth
	});

	const prevMonth = sub(selectedDate as Date, { months: 1 });
	const prevMonthArr = getPrevMonthArr(startOfSelectedMonth.getDay(), prevMonth);

	const daysCount = selectedMonthArr.length + prevMonthArr.length;

	const nextMonth = add(selectedDate as Date, { months: 1 });
	const nextMonthArr = getNextMonthArr(
		endOfSelectedMonth.getDay(),
		nextMonth,
		daysCount
	);

	return {
		isOpen,
		setIsOpen,
		selectedDate,
		setSelectedDate,
		prevMonthArr,
		selectedMonthArr,
		nextMonthArr,
		selectedDay
	};
};
