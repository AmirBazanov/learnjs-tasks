import promptSync from "prompt-sync";

const prompt = promptSync()

let number = +prompt('Введите число от 0 до 3 ');

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;

    case 1:
        console.log('Вы ввели число 1');
        break;

    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}