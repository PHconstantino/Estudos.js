// Fazer um programa para ler a quantidade de glicose 
// no sangue de uma pessoa e depois mostrar na tela a 
// classificação desta glicose de acordo com a tabela de 
// referência ao lado.

var glicose = Number(prompt("Digitie a medida da glicose: "))

if (glicose <= 100) {
    console.log("Classificação: Normal")
} else if (glicose >= 100 && glicose <= 126 ){
    console.log("Classificação: Pré-Diabetes")
} else {
    console.log("Classificação: Diabetes")
}