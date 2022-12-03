// Problema "baskara" 
// Fazer um programa para ler os três coeficientes de uma equação do segundo grau. 
// Usando a fórmula de Baskara, calcular e 
// mostrar os valores das raízes x1 e x2 da equação com 
// quatro casas decimais, 
// conforme exemplo. Se a equação não possuir raízes reais, 
// mostrar uma mensagem. 


let a = prompt("Coeficiente a:")
let b = prompt("Coeficiente b:")
let c = prompt("Coeficiente c:")


let delta = ((b*b) - (4*a*c))
let x1 = (-b + Math.sqrt(delta)) / (2*a)
let x2 = (-b - Math.sqrt(delta)) / (2*a)

if ((a == 0) || (delta < 0)) {
    console.log ("Equação não possui raizes reais")
}   else if (delta > 0) {
    console.log("X1 = ", x1.toFixed(4))
    console.log("X2 = ", x2.toFixed(4))
    }
