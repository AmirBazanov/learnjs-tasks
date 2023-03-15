import promptSync from "prompt-sync";

const prompt = promptSync()

let login = prompt('Логин ');
let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';