import promptSync from 'prompt-sync';

const prompt = promptSync();

let value = prompt('Введите число ')
if (value > 0) {
    console.log( 1 )
} else if (value < 0) {
    console.log( -1 )
} else {
    console.log( 0 )
}