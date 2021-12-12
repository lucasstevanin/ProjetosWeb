/*
TABUADA

let numero = prompt("Escolha um número para ver a tabuada dele:")
let quantidade = 10

console.log("========== TABUADA ==========")

for (let i = 1; i <= quantidade; i++){
    let mult = parseInt(numero * i)
    console.log(numero + " X " + i + " = " + mult)
}

console.log("=============================")
*/


/*
ARRAYS

let alunos = ['Maria', 'Joao', 'Marcus', 'Lucas', 'Tiago']

for (let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}
console.log("------------------------")
console.log("------------------------")
*/

/*
let alunos = ['Maria', 'Joao', 'Marcus', 'Lucas', 'Tiago']

for (let aluno in alunos){ //IMPRIMI O INDICE (NUMERO) DE CADA ELEMENTO DO ARRAY
    console.log(aluno)
}

for (let aluno of alunos){ //IMPRIMI O NOME DO ELEMENTO DO ARRAY
    console.log(aluno)
}

for (let index in alunos){ //IMPRIMI O NOME CADA ELEMENTO DO ARRAY (SÓ QUE USANDO O "in" AO INVES DE "of")
    console.log(alunos[index])
}
*/

/*
function media(n1, n2){
    let nota1 = n1
    let nota2 = n2
    let media = (nota1 + nota2) / 2
    //console.log(media)
    
    return media // ATRIBUI A 'media' A 'resultado'. SERVE PARA ATRIBUIR UMA FUNÇÃO A UMA VARIAVEL. SEM 'return' NÃO CONSEGUIMOS IMPRIMIR O CONTEUDO DA VARIAVEL
}

// media(9, 9) NECESSARIO CHAMAR A FUNCÃO

let resultado = media (3, 5)
console.log(resultado)
*/
 
/*OUTRA FORMA

let resultado = media           NESSE CASO "resultado" VIRA A NOSSA FUNÇÃO
console.log(resultado(3,5))
*/


/*FUNÇÃO ANONIMA (JÁ QUE A FUNÇÃO NAO TEM UM NOME DEFINIDO E É ATRIBUIDA A UMA VARIAVEL, ELA É CHAMADA DE ANONIMA E ENTAO AGORA EU POSSO CHAMAR A FUNÇÃO PELO NOME DA VARIAVEL)
var media = function (n1, n2){
    
    return (n1 + n2) / 2
}

console.log(media(4,6))
*/


// aluno - nota1 - nota2 - media

/*  
let alunos = ['Joao', 'Maria', 'Gabriel', 'Julia']
let notas1 = [5.5, 7, 8, 6.5]
let notas2 = [9, 5, 3.5, 10]


function media(n1, n2){
    return (n1 + n2) / 2
}


function aprovado(media){

    if (media > 7){
        return "Aprovado!"
    }else{
        return "Reprovado!"
    }
}


for (let aluno in alunos){

    let nota1 = notas1[aluno]
    let nota2 = notas2[aluno]

    let m = media(nota1, nota2)

    console.log("--- P1 --- P2 --- M ---")
    console.log(alunos[aluno] + ' - ' + nota1 + ' - ' + nota2 + ' - ' + m + ' - ' + aprovado(m))
}
*/

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue',
//     cars: [
//         {name: "--Ford--", models:['Fiesta', 'Focus', 'Mustang']},
//         {name: "--BMW--", models:['320', 'M3', 'X5']},
//         {name: "--Fiat--", models:['Punto', 'Panda']}
//     ]
// }

// delete person.age

// let x = ""

// for (let i in person.cars){
//     x +=  "\n" + person.cars[i].name + "\n"
//     for (let j in person.cars[i].models){
//         x +=  person.cars[i].models[j] + "\n"
//     }
// }

// console.log(x)

// document.body.innerHTML = "<h1> Arroz Doce" + document.body.innerHTML

//////////////////////////////////////////////////////////////////////

function mudarH1(){
    let b = document.getElementById("inpute")
    let a = document.getElementsByTagName("h1")[0].innerHTML = b.value
    //a.innerHTML = b.value //OUTRA FORMA DE FAZER O METODO ACIMA

}

