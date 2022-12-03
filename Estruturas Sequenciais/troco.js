// Problema "troco" 
// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
// e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve 
// mostrar o valor do troco a ser devolvido ao cliente. 

var unitario = prompt("Preço unitário do produto: ");
var quantidade = prompt("Quantidade comprada: ");
var recebido = prompt("Dinheiro recebido: ");
var troco = (Number(recebido) - (Number(unitario) * Number(quantidade)));
console.log(Number(troco).toFixed(2))