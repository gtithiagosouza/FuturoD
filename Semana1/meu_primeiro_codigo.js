//importando e executando a biblioteca prompt
const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");

var idade = prompt("digite sua idade ");

var cidade = prompt("digite sua cidade ");

console.log(`bem-vindo ${nome} Você tem tudo isso de idade: ${idade}  Você mora em: ${cidade}`);
