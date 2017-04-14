import moment from 'moment';

export const priceFormatter = (cell) => {
	return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
};

export const dateFormatter = (cell) => {
	const date = moment(cell).format('DD/MM/YYYY');
	return date;
};

export const getDateString = (dateString) => {
	const date = moment(dateString);
	return date.format('DD/MM/YYYY');
};

export const previousMonday = (sundayString) => {
	const sunday = moment(sundayString);
	return sunday.subtract(6, 'days').format('DD/MM/YYYY');
};
