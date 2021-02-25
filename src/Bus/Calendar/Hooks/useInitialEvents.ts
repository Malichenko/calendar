// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { eventActions } from '../actions';
// Types
import { TRootReducer } from 'Init/rootReducer';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useInitialEvents = () => {
	const dispatch = useDispatch();
	const { events } = useSelector((state: TRootReducer) => state.eventReducer);

	useEffect(() => {
		if (events === null) {
			dispatch(eventActions.getEvents());
		}
	}, [dispatch]);

	return {
		events
	};
};
