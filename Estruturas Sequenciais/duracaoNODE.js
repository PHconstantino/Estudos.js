// Problema "duracao" 
// Fazer um programa para ler uma duração de tempo em segundos, daí imprimir na tela esta duração no 
// formato horas:minutos:segundos. 

const prompt = require("readline")
const rl = prompt.createInterface({
    imput:process.stdin,
    output:process.stdout    
})
rl.question("Digite a duracao em segundos: ", (resp)=>{
  


let h = Math.floor(((Number(t))/60)/60)
let m = Math.floor(((Number(t))/60) - (60 * h))
let s = Math.floor(Number(t) % 60)

console.log(Number(h),":",Number(m),":",Number(s));

})

// let t = prompt("Digite a duracao em segundos: ");

// let h = Math.floor(((Number(t))/60)/60)
// let m = Math.floor(((Number(t))/60) - (60 * h))
// let s = Math.floor(Number(t) % 60)

// console.log(Number(h),":",Number(m),":",Number(s));

