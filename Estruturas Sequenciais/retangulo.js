// Problema "retangulo" 
// Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor 
// da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos. 

var base = prompt("Base do retangulo: ");
var altura = prompt("Altura do retangulo: ");
var area = (base * altura).toFixed(4);
var perimetro = ((base*2) + (altura*2)).toFixed(4);
var diagonal = (Math.sqrt((base**2) + (altura**2))).toFixed(4);

console.log("AREA = ", area);
console.log("Primetro = ", perimetro);
console.log("Diagonal = ", diagonal);