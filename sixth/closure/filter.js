let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => (x)=> x <= b && x >= a

console.log( arr.filter(inBetween(3, 6)) );