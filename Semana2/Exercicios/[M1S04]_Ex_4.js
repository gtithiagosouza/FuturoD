// Corrigido Professora
function adicao(numero1, numero2, funcaoAnonima) {
  let soma = numero1 + numero2;
  funcaoAnonima(soma);
}

adicao(2,2,(sum) => { console.log("O resultado final é: " + sum)})


// Meu Exercicio
const adicao = function(a, b, funcao) {
  let soma = a + b;
  funcao(soma);
}

adicao(4, 4, (sum) => { console.log("O resultado final é: " + sum); });