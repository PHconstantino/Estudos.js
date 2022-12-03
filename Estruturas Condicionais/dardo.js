// No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir. 
// Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual 
// foi a maior. 


console.log("Digite as tres distancias: ")
var um = Number(prompt())
var dois = Number(prompt())
var tres = Number(prompt())

if (um > dois && um > tres) {
    console.log("Maior Distancia = ", um)
}   else if (dois > um && dois > tres) {
    console.log("Maior Distancia = ", dois)
}   else {
    console.log("Maior Distancia = ", tres)
}