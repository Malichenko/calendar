// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
import { createMuiTheme, Theme } from '@material-ui/core';
// -----------------------------------------------------------------------------
// Theme
// -----------------------------------------------------------------------------
const fz = '1.4rem';
export const materialTheme: Theme = createMuiTheme({
	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: 'var(--primary)'
			}
		},
		// @ts-ignore
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: 'var(--secondary)'
			}
		},
		MuiPickersCalendarHeader: {
			transitionContainer: {
				'& p': {
					fontSize: fz
				}
			},
			dayLabel: {
				color: 'var(--text-color-main)',
				fontSize: fz
			},
			switchHeader: {
				color: 'var(--text-color-main)'
			},
			iconButton: {
				backgroundColor: 'var(--primary)',
				color: 'var(--text-color-main)'
			}
		},
		MuiPickersYear: {
			root: {
				color: 'var(--text-color-main)'
			},
			yearSelected: {
				color: 'var(--secondary)'
			}
		},
		MuiTypography: {
			body2: {
				fontSize: '1.2rem'
			},
			h4: {
				fontSize: '1.6rem'
			},
			subtitle1: {
				fontSize: fz
			}
		},
		MuiPickersDay: {
			day: {
				color: 'var(--text-color-main)'
			},
			daySelected: {
				backgroundColor: 'var(--secondary)'
			},
			dayDisabled: {
				color: 'rgba(0,0,0, .5)'
			},
			current: {
				color: 'var(--secondary)',
				backgroundColor: 'var(--secondary-dark)'
			}
		},
		MuiPickersModal: {
			backgroundColor: 'var(--primary)',
			dialogAction: {
				color: 'var(--text-color-main)'
			}
		},
		MuiFormLabel: {
			root: {
				color: 'var(--text-color-main)',
				fontSize: fz,
				'&.Mui-focused:not(.Mui-error)': {
					color: ' var(--secondary)'
				}
			}
		},
		MuiInput: {
			root: {
				fontSize: fz
			},
			underline: {
				'&:hover:not(.Mui-disabled):before': {
					borderBottom: '2px solid var(--secondary)'
				},
				'&:after': {
					borderBottom: '1px solid var(--secondary)'
				}
			}
		},
		MuiPickersClock: {
			pin: {
				backgroundColor: 'var(--secondary)'
			}
		},
		MuiPickersClockPointer: {
			pointer: {
				backgroundColor: 'var(--secondary)'
			},
			thumb: {
				borderColor: 'var(--secondary)'
			},
			noPoint: {
				backgroundColor: 'var(--secondary)'
			}
		},

		MuiPickersClockNumber: {
			clockNumber: {
				color: 'var(--text-color-main)'
			}
		}
	}
});
