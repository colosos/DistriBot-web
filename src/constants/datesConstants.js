export const DAYS = Object.freeze(
	{
		"Sunday": 0,
		"Monday": 1,
		"Tuesday": 2,
		"Wednesday": 3,
		"Thursday": 4,
		"Friday": 5,
		"Saturday": 6
	}
);

export const DAYS_OF_WEEK = [
  { value: DAYS.Sunday, label: 'Domingo' },
  { value: DAYS.Monday, label: 'Lunes' },
  { value: DAYS.Tuesday, label: 'Martes' },
  { value: DAYS.Wednesday, label: 'Miércoles' },
  { value: DAYS.Thursday, label: 'Jueves' },
  { value: DAYS.Friday, label: 'Viernes' },
  { value: DAYS.Saturday, label: 'Sábado' },
];

export const getDayOfWeekString = (dayNumber) => {
	return DAYS_OF_WEEK[dayNumber].label;
};
