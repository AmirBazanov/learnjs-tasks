import promptSync from 'prompt-sync';

const prompt = promptSync();

let name = prompt('Какое "официальное" название JavaScript? ')
if (name === 'ECMAScript') {
    console.log('Верно!')
} else {
    console.log('Не знаете? ECMAScript!')
}