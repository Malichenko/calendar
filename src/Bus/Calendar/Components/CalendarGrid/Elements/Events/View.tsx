// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
// Hooks
import { useEvents } from 'Bus/Calendar/Hooks/useEvents';
// Styles
import Styles from '../../Styles.module.scss';
// Types
import { IEventsProps } from 'Bus/Calendar/Types';
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC<IEventsProps> = ({
	day,
	events,
	eventsDateArr,
	eventClickHolder
}) => {
	const { keyOfEvents } = useEvents({ day, eventsDateArr });

	const eventsArr =
		events &&
		keyOfEvents &&
		events.hasOwnProperty(keyOfEvents) &&
		events[keyOfEvents];

	const eventsJSX = eventsArr
		? eventsArr.map((el, idx) => {
				return (
					<li
						key={el.id}
						id={el.id}
						data-date={keyOfEvents}
						className={Styles['grid__item']}
						onClick={(e) => eventClickHolder(e)}
					>
						<span className={Styles['grid__item-title']}>{`${idx + 1}. ${
							el.title
						}`}</span>
					</li>
				);
		  })
		: null;

	return <ul className={Styles['grid__list']}>{eventsJSX}</ul>;
};
