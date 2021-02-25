// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { format, isSameDay } from 'date-fns';
import cx from 'classnames';
// Components
import { Events } from './Elements/Events';
import { ModalAdapter } from '../ModalAdapter';
// Hooks
import { useHandlers } from 'Bus/Calendar/Hooks/useHandlers';
import { useSelectedEvent } from 'Bus/Calendar/Hooks/useSelectedEvent';
// Styles
import Styles from './Styles.module.scss';
//Types
import { TEvents } from 'Bus/Calendar/Types';
// -----------------------------------------------------------------------------
// Current
// -----------------------------------------------------------------------------
interface ICurrentProps {
	prevMonthArr: Date[];
	selectedMonthArr: Date[];
	nextMonthArr: Date[];
	setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
	selectedDay: number;
	events: TEvents;
}
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC<ICurrentProps> = ({
	prevMonthArr,
	selectedMonthArr,
	nextMonthArr,
	setSelectedDate,
	selectedDay,
	events
}) => {
	const { handleGridClick } = useHandlers(setSelectedDate);

	const {
		isModalOpen,
		handleClose,
		eventsDateArr,
		eventClickHolder
	} = useSelectedEvent(events);

	return (
		<>
			{prevMonthArr.map((day) => (
				<div
					key={String(day.getTime())}
					className={cx(Styles.grid__date, Styles['grid__date--prev'])}
					data-date={day}
					onClick={(e) => handleGridClick(e)}
				>
					<header className={cx(Styles['grid__header'])}>
						<span className={cx(Styles['grid__day'])}>
							{format(day, 'EEEEEE')}
						</span>
						<span className={cx(Styles['grid__num'])}>
							{format(day, 'd')}
						</span>
					</header>

					<Events
						day={day}
						events={events}
						eventsDateArr={eventsDateArr}
						eventClickHolder={eventClickHolder}
					/>
				</div>
			))}
			{selectedMonthArr.map((day, idx) => {
				return (
					<div
						key={String(day.getTime())}
						className={cx(Styles.grid__date, Styles['grid__date--current'], {
							[Styles['grid__date--selected']]: selectedDay === idx + 1
						})}
						data-date={day}
						onClick={(e) => handleGridClick(e)}
					>
						<header className={cx(Styles['grid__header'])}>
							<span
								className={cx(Styles['grid__day'], {
									[Styles['grid__day--today']]: isSameDay(
										day,
										new Date()
									)
								})}
							>
								{format(day, 'EEEEEE')}
							</span>
							<span className={cx(Styles['grid__num'])}>
								{format(day, 'd')}
							</span>
						</header>

						<Events
							day={day}
							events={events}
							eventsDateArr={eventsDateArr}
							eventClickHolder={eventClickHolder}
						/>
					</div>
				);
			})}
			{nextMonthArr.map((day) => (
				<div
					key={String(day.getTime())}
					className={cx(Styles.grid__date, Styles['grid__date--next'])}
					data-date={day}
					onClick={(e) => handleGridClick(e)}
				>
					<header className={cx(Styles['grid__header'])}>
						<span className={cx(Styles['grid__day'])}>
							{format(day, 'EEEEEE')}
						</span>
						<span className={cx(Styles['grid__date-num'])}>
							{format(day, 'd')}
						</span>
					</header>

					<Events
						day={day}
						events={events}
						eventsDateArr={eventsDateArr}
						eventClickHolder={eventClickHolder}
					/>
				</div>
			))}
			<ModalAdapter
				isModalOpen={isModalOpen}
				handleClose={handleClose}
				heading="Edit Event"
			/>
		</>
	);
};
