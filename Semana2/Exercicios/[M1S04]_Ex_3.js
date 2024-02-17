//meu exericicio For
const Media = (num) => {
  let soma = 0;
  for (i = 0; i < num.length; i++) {
  soma += num[i]; // soma = soma + nun[1]
  }
  const media1 = soma/num.length;
  return media1;
};
const num = [10,10,10,7];
console.log(Media(num));



// Corrigido Professora For of
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

