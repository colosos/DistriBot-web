export const dateSorter = (a, b, order) => {
  if (order === 'asc') {
    return new Date(a.date) - new Date(b.date);
  }
  return new Date(b.date) - new Date(a.date);      
}
    