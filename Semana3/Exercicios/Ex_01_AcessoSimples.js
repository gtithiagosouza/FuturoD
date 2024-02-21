let prompt = require("prompt-sync")();
let frutas = [];


for(i = 0; i < 3; i++) {
frutas.push(prompt("Insira 3 frutas "));
let  frutasArray = frutas[i]

console.log(frutasArray)

}

console.log(frutas[1])