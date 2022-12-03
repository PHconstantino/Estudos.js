// Problema "notas" 
// Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de 
// uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no 
// ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a 
// mensagem "REPROVADO", conforme exemplos. 

let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")

let soma = (Number(nota1) + Number(nota2))
console.log("NOTA FINAL = ", soma)
if (soma < 60) {
    console.log ("REPROVADO")
}






