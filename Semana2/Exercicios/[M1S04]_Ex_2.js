
const prompt = require("prompt-sync")();
var numero = prompt("Vamos descobrir se é par ou impar: ");

function parImpar(numero){

  var resultado = numero % 2 == 0 ? "PAR" : "IMPAR"
  return resultado;
}

console.log(`Você escolheu o número ${numero} ele é o numero ${parImpar(numero)}`);