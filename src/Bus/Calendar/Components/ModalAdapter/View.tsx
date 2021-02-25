// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
import { Backdrop, Fade, IconButton, Modal, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// Components
import { Form } from './Components/Form';
// Styles
import Styles from './Styles.module.scss';
// Types
// -----------------------------------------------------------------------------
// Current
// -----------------------------------------------------------------------------
interface ICurrentProps {
	isModalOpen: boolean;
	handleClose(): void;
	heading?: string;
}
// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------
export const View: React.FC<ICurrentProps> = ({
	isModalOpen,
	handleClose,
	heading = 'Add New Item'
}) => (
	<Modal
		aria-labelledby="transition-modal-title"
		aria-describedby="transition-modal-description"
		className={Styles.modal}
		open={isModalOpen}
		onClose={handleClose}
		closeAfterTransition
		BackdropComponent={Backdrop}
		BackdropProps={{
			timeout: 500
		}}
	>
		<Fade in={isModalOpen}>
			<div className={Styles.modal__paper}>
				<header className={Styles.modal__header}>
					<Typography variant="h4">{heading}</Typography>

					<IconButton
						color="default"
						aria-label="add new event"
						onClick={handleClose}
					>
						<CloseIcon fontSize="large" />
					</IconButton>
				</header>
				<main className={Styles.modal__main}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Form />
					</MuiPickersUtilsProvider>
				</main>
			</div>
		</Fade>
	</Modal>
);
