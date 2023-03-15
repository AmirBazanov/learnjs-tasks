import promptSync from "prompt-sync";

const prompt = promptSync()

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

console.log( a + b );