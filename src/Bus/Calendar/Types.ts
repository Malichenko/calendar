// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
import React from 'react';

export interface IInitialValues {
	title: string;
	description?: string;
	date: Date;
	time: Date;
}

export interface IEventInit {
	key: string;
	id: string;
}

export interface IEventsProps {
	day: Date;
	events: TEvents;
	eventsDateArr: null | Date[];
	eventClickHolder: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface IUseEventsProps extends Pick<IEventsProps, 'day' | 'eventsDateArr'> {}
// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------
export type TEvent = {
	id: string;
	title: string;
	description?: string | undefined;
	date: Date;
	time: Date;
};

export type TEvents = null | {
	[p: string]: TEvent[];
};

export interface TEventState {
	events: TEvents;
	event: TEvent | null;
	isLoading: boolean;
	error: null | string;
}

export interface IEvents extends Omit<TEventState, 'events'> {}

export interface IEventPayload {
	events?: TEvents;
	event?: TEvent;
	status?: number;
	error?: Pick<TEventState, 'error'>;
}
// -----------------------------------------------------------------------------
// Action
// -----------------------------------------------------------------------------
export type TType = string;
// -----------------------------------------------------------------------------
// Type Names
// -----------------------------------------------------------------------------
export type TTypes = {
	EVENT_ADD: string;
	EVENT_SUB: string;
	EVENT_SELECTED: string;
	EVENT_EDIT_SELECTED: string;
	EVENT_START_FETCHING: string;
	EVENT_STOP_FETCHING: string;
	EVENT_SET_FETCHING_ERROR: string;
};
