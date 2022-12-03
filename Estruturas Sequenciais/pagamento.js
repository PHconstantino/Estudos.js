// Problema "pagamento" 
// Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a 
// quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com 
// uma mensagem explicativa, conforme exemplo.

var nomePrimera = prompt("Nome: ");
var valor = prompt("Valor por hora: ");
var horas = prompt("Horas Trabalhadas: ");
var pagar = (horas * valor);

console.log("O pagamento para ", nomePrimera, "deve ser", pagar.toFixed(2));