// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { format } from 'date-fns';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useFilter = (selectedDate: Date | null) => {
	const history = useHistory();

	useEffect(() => {
		if (selectedDate) {
			history.push({
				pathname: '/calendar',
				search: `?date=${String(format(selectedDate as Date, 'P'))}`
			});
		}
	}, [history, selectedDate]);
};
