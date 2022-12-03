// Problema "idades" 
// Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os 
// nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo. 

console.log("Dados da primeira pessoa: ");
var nomePrimeira = prompt("Nome: ");
var idadePrimeira = prompt("Idade: ");

console.log("Dados da segunda pessoa: ");
var nomeSegunda = prompt("Nome: ");
var idadeSegunda = prompt("Idade: ");

var media = (Number(idadePrimeira) + Number(idadeSegunda)) / 2;
console.log("A idade média de ", nomePrimeira, "e", nomeSegunda, " é de ", media, " anos.");