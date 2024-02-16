//meu exericicio
const Media = (num) => {
  let soma = 0;
  for (let i = 0; i < num.length; i++) {
  soma += num[i];
  }
  const media1 = soma / num.length;
  return media1;
};
const numeros = [10,10,10,8];
console.log(Media(numeros));






// Corrigido Professora
const exercicio = (array) => {
  let soma = 0;
  for(let numero of array) {
    soma += numero;
      }
      let media = soma/array.length;
      return media;
}

let arrayNumero = [10, 10, 10, 8];

console.log(exercicio(arrayNumero));

