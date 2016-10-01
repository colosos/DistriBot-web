export const priceFormatter = (cell) => {
	return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
};

export const dateFormatter = (cell) => {
	/*Esto parece que esta convirtiendo teniendo en cuenta
	el timezone. Luego que se obtenga la fecha del backend
	se va a testear este metodo para ver si funciona bien.*/
	const date = new Date(cell);
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	return day + '/' + month + '/' + year;
};