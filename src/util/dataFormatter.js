import moment from 'moment';

export const priceFormatter = (cell) => {
	return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
};

export const dateFormatter = (cell) => {
	const date = moment(cell).format('DD/MM/YYYY');
	return date;
};
