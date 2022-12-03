// Uma empresa vai conceder um aumento percentual de 
// salário aos seus funcionários dependendo de quanto 
// cada pessoa ganha, conforme tabela ao lado. Fazer um 
// programa para ler o salário de uma pessoa, daí mostrar 
// qual o novo salário desta pessoa depois do aumento, 
// quanto foi o aumento e qual foi a porcentagem de 
// aumento. 

var salario = Number(prompt("Digite o salario da pessoa: "));

if (salario <= 1000 ) {
    var novo = Number((salario*1.20));
    var aumento = Number((salario*0.20));
    console.log("Novo Salario = R$", novo.toFixed(2));
    console.log("Aumento= R$", aumento.toFixed(2));
    console.log("Porcentagem = 20%");
} else if ((1000 < salario) && (salario <= 3000)) {
    var novo = Number((salario*1.15));
    var aumento = Number((salario*0.15));
    console.log("Novo Salario = R$", novo.toFixed(2));
    console.log("Aumento= R$", aumento.toFixed(2));
    console.log("Porcentagem = 15%");
} else if ((3000 < salario) && (salario<= 8000)) {
    var novo = Number((salario*1.10));
    var aumento = Number((salario*0.10));
    console.log("Novo Salario = R$", novo.toFixed(2));
    console.log("Aumento= R$", aumento.toFixed(2));
    console.log("Porcentagem = 10%");
}   else if (8000 < salario) {
    var novo = Number((salario*1.05));
    var aumento = Number((salario*0.5));
    console.log("Novo Salario = R$", novo.toFixed(2));
    console.log("Aumento= R$", aumento.toFixed(2));
    console.log("Porcentagem = 5%");
}