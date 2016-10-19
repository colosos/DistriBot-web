var moment = require('moment');

export const priceFormatter = (cell) => {
	return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
};

export const dateFormatter = (cell) => {
	const date = moment(cell).format('DD/MM/YYYY');
	return date;
};

export const clientFormatter = (client) => {
	const { name } = client;
	return name;
};

export const salesmanFormatter = (salesman) => {
	const { userName } = salesman
	return userName;
};
