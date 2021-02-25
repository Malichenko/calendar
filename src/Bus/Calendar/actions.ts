// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Types
import { types } from './eventsTypes';
import { format } from 'date-fns';
import shortid from 'shortid';
import { IEventInit, IEventPayload, IInitialValues, TEvent, TEvents } from './Types';
import { Dispatch } from 'redux';
// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------
export const eventActions = Object.freeze({
	//Sync
	startFetching: () => {
		return {
			type: types.EVENT_START_FETCHING
		};
	},
	stopFetching: () => {
		return {
			type: types.EVENT_STOP_FETCHING
		};
	},
	setFetchingError: (error: string) => {
		return {
			type: types.EVENT_SET_FETCHING_ERROR,
			error: true,
			payload: error
		};
	},
	add: (payload: IEventPayload) => {
		return {
			type: types.EVENT_ADD,
			payload
		};
	},
	sub: (payload: IEventPayload) => {
		return {
			type: types.EVENT_SUB,
			payload
		};
	},
	selectEvent: (payload: TEvent | null) => {
		return {
			type: types.EVENT_SELECTED,
			payload
		};
	},
	editSelectedEvent: (payload: TEvents) => {
		return {
			type: types.EVENT_EDIT_SELECTED,
			payload
		};
	},
	// Async
	//TODO: тут есть возможность переопределить на запросы
	getEvents: () => async (dispatch: Dispatch<any>) => {
		dispatch(eventActions.startFetching());

		try {
			const data = localStorage.getItem('events');
			const parsedDate = data ? JSON.parse(data) : null;
			if (parsedDate) {
				dispatch(eventActions.add(parsedDate));
			} else {
				//	проврку на ошибки запроса
				// const error = {
				// 	status: response.status,
				// };
				// dispatch(userActions.setFetchingError(error));
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			dispatch(eventActions.stopFetching());
		}
	},
	getEvent: (payload: IEventInit | null) => async (dispatch: Dispatch<any>) => {
		dispatch(eventActions.startFetching());
		if (payload !== null) {
			const { key, id } = payload;
			try {
				const data = localStorage.getItem('events');
				const parsedStorageDate: TEvents = data ? JSON.parse(data) : null;

				if (parsedStorageDate && parsedStorageDate.hasOwnProperty(key)) {
					const dailyEventsArr = parsedStorageDate[key];
					const findEvent = dailyEventsArr.find((event) => event.id === id);
					if (findEvent) dispatch(eventActions.selectEvent(findEvent));
				} else {
					//	проврку на ошибки запроса
					// const error = {
					// 	status: response.status,
					// };
					// dispatch(userActions.setFetchingError(error));
				}
			} catch (error) {
				console.error(error.message);
			} finally {
				dispatch(eventActions.stopFetching());
			}
		} else {
			dispatch(eventActions.selectEvent(null));
		}
	},
	editEvent: (payload: TEvent) => async (dispatch: Dispatch<any>) => {
		dispatch(eventActions.startFetching());
		const newKey = format(new Date(payload.date), 'P');

		try {
			const data = localStorage.getItem('events');
			const parsedStorageDate: TEvents = data ? JSON.parse(data) : null;

			const oldKey =
				parsedStorageDate &&
				Object.keys(parsedStorageDate).reduce<string>((acc, el) => {
					const arr = parsedStorageDate[el];
					const idx = arr.findIndex((el) => el.id === payload.id);
					if (idx >= 0) {
						acc = el;
					}
					return acc;
				}, '');

			if (newKey !== oldKey && oldKey && parsedStorageDate) {
				const filteredArr = parsedStorageDate[oldKey].filter(
					(el) => el.id !== payload.id
				);
				delete parsedStorageDate[oldKey];
				if (filteredArr.length > 0) parsedStorageDate[oldKey] = filteredArr;

				if (parsedStorageDate.hasOwnProperty(newKey)) {
					parsedStorageDate[newKey].push(payload);
				} else {
					parsedStorageDate[newKey] = [payload];
				}
			}

			if (parsedStorageDate && parsedStorageDate.hasOwnProperty(newKey)) {
				const dailyEventsArr = parsedStorageDate[newKey];
				const indexOfEvent = dailyEventsArr.findIndex(
					(el) => el.id === payload.id
				);
				dailyEventsArr[indexOfEvent] = payload;
				if (indexOfEvent >= 0) {
					localStorage.setItem('events', JSON.stringify(parsedStorageDate));
					dispatch(eventActions.editSelectedEvent(parsedStorageDate));
				} else {
					//	проврку на ошибки запроса
					// const error = {
					// 	status: response.status,
					// };
					// dispatch(userActions.setFetchingError(error));
				}
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			dispatch(eventActions.stopFetching());
		}
	},
	createEvent: (payload: IInitialValues) => async (dispatch: Dispatch<any>) => {
		dispatch(eventActions.startFetching());
		const parsedPayloadData = {
			[format(payload.date, 'P')]: [
				{
					...payload,
					id: shortid.generate()
				}
			]
		};

		const eventKeyArr = Object.keys(parsedPayloadData);
		const eventKey = eventKeyArr.length ? eventKeyArr.join() : null;

		try {
			const data = localStorage.getItem('events');
			const parsedStorageDate = data ? JSON.parse(data) : null;

			const isEventExist =
				parsedStorageDate &&
				Object.keys(parsedStorageDate).some((el) => el === eventKey);

			const processedDate = isEventExist &&
				eventKey && {
					...parsedStorageDate,
					[eventKey]: [
						...parsedStorageDate[eventKey],
						...parsedPayloadData[eventKey]
					]
				};

			if (processedDate) {
				localStorage.setItem('events', JSON.stringify(processedDate));
				dispatch(eventActions.add(processedDate));
			} else if (parsedPayloadData) {
				localStorage.setItem(
					'events',
					JSON.stringify({ ...parsedStorageDate, ...parsedPayloadData })
				);
				dispatch(
					eventActions.add({ ...parsedStorageDate, ...parsedPayloadData })
				);
			} else {
				//	проврку на ошибки запроса
				// const error = {
				// 	status: response.status,
				// };
				// dispatch(userActions.setFetchingError(error));
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			dispatch(eventActions.stopFetching());
		}
	},
	deleteEvent: (payload: TEvent) => async (dispatch: Dispatch<any>) => {
		dispatch(eventActions.startFetching());
		const { id, date } = payload;
		const key = format(new Date(date), 'P');

		try {
			const data = localStorage.getItem('events');
			const parsedStorageDate: TEvents = data ? JSON.parse(data) : null;

			if (parsedStorageDate && parsedStorageDate.hasOwnProperty(key)) {
				const dailyEventsArr = parsedStorageDate[key];
				const findById = dailyEventsArr.filter((event) => event.id !== id);
				parsedStorageDate[key] = findById;
				if (findById.length === 0) delete parsedStorageDate[key];
				localStorage.setItem('events', JSON.stringify(parsedStorageDate));
				dispatch(eventActions.sub(parsedStorageDate));
			} else {
				//	проврку на ошибки запроса
				// const error = {
				// 	status: response.status,
				// };
				// dispatch(userActions.setFetchingError(error));
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			dispatch(eventActions.stopFetching());
		}
	}
});
