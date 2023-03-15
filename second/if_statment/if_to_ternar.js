import promptSync from 'prompt-sync';

const prompt = promptSync();

let a = prompt('Введите число ')
let b = prompt('Введите число ')
let result = (a + b < 4) ? 'Мало' : 'Много'