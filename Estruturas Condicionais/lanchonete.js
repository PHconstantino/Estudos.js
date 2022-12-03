// Uma lanchonete possui vários produtos. Cada produto possui um código 
// e um preço. Você deve fazer um programa para ler o código e a 
// quantidade comprada de um produto (suponha um código válido), e daí 
// informar qual o valor a ser pago, com duas casas decimais, conforme 
// tabela de produtos ao lado. 


var codigo = Number(prompt("Codigo do produto comprado: "))
var quantidade = Number(prompt("Quantidade comprada"))

switch (Number(codigo)) {
    case 1:
        var pagar = 5 * quantidade;
        break;
    case 2:
        var pagar = 3.5 * quantidade;
        break;
    case 3:
        var pagar = 4.8 * quantidade;
        break;
    case 4:
        var pagar = 8.9 * quantidade;
        break;
    case 5:
        var pagar = 7.32 * quantidade;
}

console.log("Valor a pagar: R$ ",pagar.toFixed(2))
