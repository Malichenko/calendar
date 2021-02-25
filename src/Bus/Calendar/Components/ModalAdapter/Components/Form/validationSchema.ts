// Core
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	title: Yup.string().required('Title is required'),
	date: Yup.date().required('Date is required')
});
