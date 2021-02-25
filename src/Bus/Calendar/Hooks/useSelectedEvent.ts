// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Actions
import { eventActions } from '../actions';
// Types
import { TEvents } from '../Types';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useSelectedEvent = (events: TEvents) => {
	const dispatch = useDispatch();
	const [isModalOpen, toggleModalOpen] = useState(false);

	const handleClose = () => {
		dispatch(eventActions.getEvent(null));
		toggleModalOpen(false);
	};
	const eventsDateArr = events && Object.keys(events).map((key) => new Date(key));

	const eventClickHolder = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const target = e.target as HTMLElement;
		dispatch(
			eventActions.getEvent({
				key: target.dataset.date as string,
				id: target.id
			})
		);
		toggleModalOpen(true);
	};
	return {
		isModalOpen,
		handleClose,
		eventsDateArr,
		eventClickHolder
	};
};
