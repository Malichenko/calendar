// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------
import { createMuiTheme, Theme } from '@material-ui/core';
// -----------------------------------------------------------------------------
// Theme
// -----------------------------------------------------------------------------
const fz = '1.5rem';
export const theme: Theme = createMuiTheme({
	overrides: {
		MuiFormControl: {
			root: {
				width: '100%',
				paddingBottom: '2rem',
				marginBottom: '.5rem'
			}
		},
		MuiFormLabel: {
			root: {
				color: 'var(--text-main-color)',
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
		MuiFormHelperText: {
			root: {
				fontSize: '1.2rem',
				position: 'absolute',
				top: 'calc(100% - 2rem)',
				left: '.5rem'
			}
		},
		MuiLinearProgress: {
			barColorPrimary: {
				backgroundColor: 'var(--secondary)'
			}
		},
		MuiInputAdornment: {
			root: {
				'& svg': {
					fill: 'var(--purplish-grey)'
				}
			}
		},
		MuiFormGroup: {
			root: {
				justifyContent: 'space-between',
				margin: '2rem 0 5rem'
			}
		}
	}
});
