// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo 
// pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 
// horas

var hinicial = Number(prompt("Hora inicial"));
var hfinal = Number(prompt("Hora Final"));

if (hinicial >= hfinal) {
    var htotal = ((24 - hinicial) + hfinal)
}   else {
    var htotal = -( hinicial - hfinal)
}

console.log("O JOGO DUROU ", htotal, "Horas")