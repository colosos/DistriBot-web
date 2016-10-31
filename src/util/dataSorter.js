export const dateSorter = (a, b, order) => {
  if (order === 'asc') {
    return new Date(a.creationDate) - new Date(b.creationDate);
  }
  return new Date(b.creationDate) - new Date(a.creationDate);      
}

export const quantitySorter = (a, b, order) => {
	let aValue = a.quantity.split(" ")[0];
	let bValue = b.quantity.split(" ")[0];
  if (order === 'asc') {
    return aValue - bValue;
  }
  return bValue - aValue;      
}