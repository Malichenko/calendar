// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
//Core
import { getMonth, getYear } from 'date-fns';
// Utils
import { CALENDAR_CEIL_COUNT } from '../Constants/calendar';
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const getNumberOfNextMonth = (num: number) => {
	return CALENDAR_CEIL_COUNT - num;
};

export const getNextMonthArr = (add: number, month: Date, daysCount: number) => {
	const arr: Date[] = [];
	for (let i = 1; i <= getNumberOfNextMonth(daysCount); i++) {
		const date = new Date(getYear(month), getMonth(month), i);
		arr.push(date);
	}
	return arr;
};
