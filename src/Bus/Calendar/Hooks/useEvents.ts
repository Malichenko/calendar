// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { format, isSameDay } from 'date-fns';
// Types
import { IUseEventsProps } from '../Types';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useEvents = ({ day, eventsDateArr }: IUseEventsProps) => {
	const findEvents = eventsDateArr?.find((date) => isSameDay(date, day));
	const keyOfEvents = findEvents && format(findEvents, 'P');

	return {
		keyOfEvents
	};
};
