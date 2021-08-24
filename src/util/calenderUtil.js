import { SPACE_OF_DAYS_IN_MONTH } from '../constants';

export const calculateEndDatesOfMonths = (year) => ([
  '31',
  (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 29 : 28,
  '31', '30', '31', '30', '31', '31', '30', '31', '30', '31',
]);

export const createDays = (year, month, endDate) => {
  const today = new Date();
  const isDate = (day, currentDate) => (
    new Date(year, month, 1).getDay() <= day && endDate >= currentDate
  );

  let days = [];
  let weekRow = [];

  for (let i = 0, date = 1; i < SPACE_OF_DAYS_IN_MONTH; i += 1) {
    if (i !== 0 && i % 7 === 0 && endDate < date) break;

    if (weekRow.length === 7) {
      days = [...days, weekRow];
      weekRow = [];
    }

    weekRow = [...weekRow, {
      date: isDate(i, date) ? date : '',
      category: '',
      weekends: (weekRow.length === 0 || weekRow.length === 6),
      today: today.getFullYear() === year
        && today.getMonth() === month
        && isDate(i, date)
        && today.getDate() === date,
    }];

    if (isDate(i, date)) date += 1;
  }

  days = [...days, weekRow];

  return days;
};
