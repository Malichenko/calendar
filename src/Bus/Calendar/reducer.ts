// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Type Names
import { types } from './eventsTypes';
// Types
import { IEventPayload, TEventState } from './Types';
// -----------------------------------------------------------------------------
// Initial State
// -----------------------------------------------------------------------------
const initialState: TEventState = {
	events: null,
	event: null,
	isLoading: false,
	error: null
};
// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------
export const eventReducer = (
	state: TEventState = initialState,
	{ type, payload }: { type: string; payload: IEventPayload }
) => {
	switch (type) {
		case types.EVENT_START_FETCHING:
			return {
				...state,
				isLoading: true
			};
		case types.EVENT_STOP_FETCHING:
			return {
				...state,
				isLoading: false
			};
		case types.EVENT_SET_FETCHING_ERROR:
			return {
				...state,
				isLoading: false,
				profile: null,
				error: payload.status
			};
		case types.EVENT_ADD:
			return {
				...state,
				error: null,
				events: payload
			};
		case types.EVENT_SUB:
			return {
				...state,
				error: null,
				events: payload
			};
		case types.EVENT_SELECTED:
			return {
				...state,
				error: null,
				event: payload
			};
		case types.EVENT_EDIT_SELECTED:
			return {
				...state,
				error: null,
				events: payload
			};
		default:
			return state;
	}
};
