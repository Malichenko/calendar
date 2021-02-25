// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
// Core
import React from 'react';
// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export interface IPickersProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	selectedDate?: Date | null;
	handleDateChange(date: Date | null): void;
	onlyIcon?: boolean;
	label?: string;
	setFieldValue?: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => void;
}
