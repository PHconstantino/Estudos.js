// Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os 
// números podem ser digitados em qualquer ordem.

alert("Digite dois numeros inteiros:");
var primeiro = Number(prompt());
var segundo = Number(prompt());

if (((primeiro % segundo) == 0) ||((segundo % primeiro) == 0)){
    console.log("Sao multiplos")
}   else {
    console.log("Não são multiplos")
}