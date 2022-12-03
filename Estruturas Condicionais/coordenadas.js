// Leia os valores das coordenadas X e Y de um ponto no plano 
// cartesiano. A seguir, determine qual o quadrante ao qual pertence o 
// ponto (Q1, Q2, Q3 ou Q4). Se o ponto estiver na origem, escreva a 
// mensagem “Origem”. Se o ponto estiver sobre um dos eixos escreva 
// “Eixo X” ou “Eixo Y”, conforme for a situação.

var x = Number(prompt("Valor de X: "))
var y = Number(prompt("Valor de Y: "))

if ((x==0)&& (y == 0)) {
    var posicao = console.log("Origem")
}   else if (x==0) {
    var posicao = console.log("Eixo Y")
}   else if (y==0) {
    var posicao = console.log("Eixo X")
}   else if ((x < 0) && (y < 0)) {
    var posical = console.log("Q3")
}   else if (( x > 0) && (y > 0)) {
    var posical= console.log("Q1")
}   else if (( x < 0) && (y > 0)) {
    var posical= console.log("Q2")
}   else {
    var posical= console.log("Q4")
}