const getLocalDay = date => (date.getDay() === 0)?7:date.getDay();

const date = new Date(2022, 0, 5);
console.log( getLocalDay(date) );