//Aula 05 Strings e Arrays (Dia 02)
//Exercício de interpretação de código 01
let array
console.log('a. ', array) //a. undefined

array = null
console.log('b. ', array) //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //f. 9

//Exercício de interpretação de código 02
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercício de escrita de código 01
const nome = prompt("Digite seu nome")
const email = prompt("Digite seu e-mail")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//Exercício de escrita de código 02
const comidas = ["arroz", "feijão", "ovo", "bife", "batata-frita"]

console.log(comidas)

console.log("Essas são minhas comidas preferidas: ")
console.log(comidas [0])
console.log(comidas [1])
console.log(comidas [2])
console.log(comidas [3])
console.log(comidas [4])

const preferida = prompt("Qual a sua comida preferida?")
comidas [1] = preferida

console.log(comidas)

//Exercício de escrita de código 03
let listaDeTarefas = []

const tarefaUm = prompt("Digite uma tarefa que você precisa realizar hoje (1 de 3)")
const tarefaDois = prompt("Digite uma tarefa que você precisa realizar hoje (2 de 3)")
const tarefaTres = prompt("Digite uma tarefa que você precisa realizar hoje (3 de 3)")

listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

console.log(listaDeTarefas)

const indice = prompt("Digite o número 0 ou 1 ou 2")

listaDeTarefas.splice(indice, 1) 

console.log(listaDeTarefas)