// Problema "consumo" 
// Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de 
// combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo 
// médio do carro, com três casas decimais. 

var distancia = prompt("Distancia percorrida: ");
var gasto = prompt("Combustível gasto: ");
var consumo = (Number(distancia)/Number(gasto));

console.log = ("Consumo medio = ", consumo.toFixed(3));