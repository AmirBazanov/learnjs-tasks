import promptSync from "prompt-sync";

const prompt = promptSync()

let age = +prompt('Введите возраст ');
if (age >= 14 && age <= 90){
    console.log(age)
}
if (!(age >= 14 && age <= 90)){
    console.log(age)
}