import promptSync from "prompt-sync";

const prompt = promptSync()


let num

do {
    num = +prompt("Введите число: ")
} while (num <= 100 && num);