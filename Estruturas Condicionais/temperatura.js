// Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para 
// isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser 
// informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala com 
// duas casas decimais. A seguir é dada a fórmula para converter de Fahrenheit para Celsius


var escala = (prompt("Voce vai digitar a temperatura em qual escala (C/F)?"))

if (escala == "F"){
    var temperatura = Number(prompt("Digite a temperatura em Fahrenheit: "))
    var c = ((5/9)*(temperatura - 32))
    console.log("Temperatura equivalente em Celsius: ", c.toFixed(2))
} else if (escala == "C"){
    var temperatura = Number(prompt("Digite a temperatura em Celsius: "))
    var f = ((temperatura*9/5) + 32)
    console.log("Temperatura equivalente em Fahrenheit: ", f.toFixed(2))
}