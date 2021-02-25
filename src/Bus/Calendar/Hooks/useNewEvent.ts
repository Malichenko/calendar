// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import { useState } from 'react';
// -----------------------------------------------------------------------------
// Hook
// -----------------------------------------------------------------------------
export const useNewEvent = () => {
	const [isModalOpen, toggleModal] = useState<boolean>(false);

	const handleOpen = () => toggleModal(true);

	const handleClose = () => toggleModal(false);

	return {
		isModalOpen,
		handleOpen,
		handleClose
	};
};
