import promptSync from "prompt-sync";
const prompt = promptSync()

let userName = prompt('Введите логин ')

if (userName === 'Админ') {

    let pass;

    if (pass === 'Я главный') {
        console.log( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        console.log( 'Отменено' );
    } else {
        console.log( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    console.log( 'Отменено' );
} else {
    console.log( "Я вас не знаю" );
}
