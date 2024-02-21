const prompt = require("prompt-sync")();

let numeros= [];
for (let i = 0; i < 5; i++) {
numeros.push(prompt("informe um numero. "))
let numerosArray = numeros[i];

console.log(numerosArray)

}
console.log(numeros)