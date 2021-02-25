// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
//Core
import { getDaysInMonth, getMonth, getYear } from 'date-fns';
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const getNumberOfPrevMonth = (num: number) => {
	if (num === 0) {
		return 6;
	} else {
		return num - 1;
	}
};

export const getPrevMonthArr = (sub: number, month: Date) => {
	const daysInMonth = getDaysInMonth(month);
	const arr: Date[] = [];
	for (let i = getNumberOfPrevMonth(sub); i > 0; i--) {
		const date = new Date(getYear(month), getMonth(month), daysInMonth - i + 1);
		arr.push(date);
	}
	return arr;
};
