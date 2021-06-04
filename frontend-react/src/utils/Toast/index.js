import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const error = (text, position) => toast.error(text, {
	position: position,
	autoClose: 2500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
});

export const success = (text, position) => toast.info(text, {
	position: position,
	autoClose: 2500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
});