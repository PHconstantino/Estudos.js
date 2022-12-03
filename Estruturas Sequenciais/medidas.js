// Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados 
//     com quatro casas decimais): 
//     a) a área do quadrado que tem lado A 
//     b) a área do triângulo retângulo que base A e altura B 
//     c) a área do trapézio que tem bases A e B, e altura C 

var a = prompt("Digite a medida A: ");
var b = prompt("Digite a medida B: ");
var c = prompt("Digite a medida C: ");

var quadrado = (Number(a)**2);
var triangulo = ((Number(a) * Number(b))/2);
var trapezio = (((Number(b) + Number(a)) * Number(c))/2);

console.log("AREA DO QUADRADO = ", quadrado.toFixed(4));
console.log("AREA DO TRIANGULO = ", triangulo.toFixed(4));
console.log("AREA DO TRAPEZIO = ", trapezio.toFixed(4));