// Problema "terreno" 
// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma 
// casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, 
// o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com 
// duas casas decimais, conforme exemplo. 

var largura = prompt("Digite a largura do terreno: ");
var comprimento = prompt("Digite o comprimento do terreno: ");
var valor = prompt("Digite o valor do metro quadrado: ");

var area = (largura * comprimento);
var perco = (area * valor);

console.log("Area do terreno = ", area );
console.log("Preco do terreno = ", perco); 