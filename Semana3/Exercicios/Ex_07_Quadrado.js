const prompt = require("prompt-sync")();

let numeros= [];
for (let i = 0; i < 5; i++) {
  numeros.push(Number(prompt("Informe um número: ")));
  let numerosArray = numeros[i];

console.log(numerosArray)

}
console.log(numeros)

const quadrados = numeros.map((item) => {
  return item * item;
});

console.log(quadrados)