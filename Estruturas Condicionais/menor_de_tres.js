// Problema "menor_de_tres" 
// Fazer um programa para ler três números inteiros. 
// Em seguida, mostrar qual o menor dentre os três 
// números lidos. Em caso de empate, mostrar apenas uma vez. 

const primeiro = Number(prompt("Primeiro Valor "))
const segundo = Number(prompt("Segundo Valor "))
const terceiro = Number(prompt("Terceiro Valor "))

if (primeiro <= segundo && primeiro <= terceiro) {
    console.log("Menor = ", primeiro)
} else if (segundo <= primeiro && segundo <= terceiro) {
    console.log("Menor = ", segundo)
} else {
    console.log("Menor =", terceiro)
}