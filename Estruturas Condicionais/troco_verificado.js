// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
// e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido 
// ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o 
// valor restante conforme exemplo. 

var preco = prompt("Preço unitário do produto: ")
var quantidade = prompt("Quantidade comprada: ")
var recebido = prompt("Dinheiro recebido: ")
var precofinal = (preco * quantidade)

if (precofinal <= recebido) {
    const troco = recebido - precofinal
    console.log("TROCO = ", troco)
} else {
    const troco = precofinal - recebido
    console.log("DINHEIRO INSUFICIENTE. FALTAM", troco, "REAIS")
}



