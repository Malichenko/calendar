// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { format } from 'date-fns';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
// Components
import { DatePicker } from 'Share/Components/Pickers/DatePicker';
import { CalendarGrid } from '../Components/CalendarGrid';
// Hooks
import { useValues } from '../Hooks/useValues';
import { useHandlers } from '../Hooks/useHandlers';
import { ModalAdapter } from '../Components/ModalAdapter';
import { useInitialEvents } from '../Hooks/useInitialEvents';
import { useNewEvent } from '../Hooks/useNewEvent';
// Styles
import Styles from './Styles.module.scss';
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC = () => {
	const { events } = useInitialEvents();
	const {
		isOpen,
		setIsOpen,
		selectedDate,
		setSelectedDate,
		prevMonthArr,
		selectedMonthArr,
		nextMonthArr,
		selectedDay
	} = useValues();
	const { handleDateChange, setPrevMonth, setNextMonth } = useHandlers(setSelectedDate);

	const { isModalOpen, handleOpen, handleClose } = useNewEvent();

	return (
		<section className={Styles.calendar}>
			<header className={Styles['calendar__header']}>
				<div className="calendar__new-event">
					<IconButton
						color="default"
						aria-label="add new event"
						onClick={handleOpen}
					>
						<AddIcon fontSize="large" />
					</IconButton>
				</div>
				<div className={Styles['calendar__switcher']}>
					<div className={Styles['calendar__month']}>
						<IconButton
							color="default"
							aria-label="add to shopping cart"
							onClick={setPrevMonth}
						>
							<ChevronLeftIcon fontSize="large" />
						</IconButton>
						<div className={Styles['calendar__month-title']}>
							{format(selectedDate as Date, 'MMMM yyyy')}
						</div>
						<IconButton
							color="default"
							aria-label="add to shopping cart"
							onClick={setNextMonth}
						>
							<ChevronRightIcon fontSize="large" />
						</IconButton>
					</div>
					<div className={Styles['calendar__datepicker']}>
						<DatePicker
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							selectedDate={selectedDate}
							handleDateChange={handleDateChange}
							onlyIcon
						/>
					</div>
				</div>
			</header>
			<main className={Styles['calendar__days']}>
				<CalendarGrid
					events={events}
					prevMonthArr={prevMonthArr}
					selectedMonthArr={selectedMonthArr}
					nextMonthArr={nextMonthArr}
					setSelectedDate={setSelectedDate}
					selectedDay={selectedDay}
				/>
			</main>
			<ModalAdapter isModalOpen={isModalOpen} handleClose={handleClose} />
		</section>
	);
};
