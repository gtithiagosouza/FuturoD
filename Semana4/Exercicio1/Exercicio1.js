function parouimpar() {
  return new Promise((resolve, reject) => {
    var numero = 3;
    var resultado = numero % 2 === 0;
    if (resultado) {
      resolve("Deu sucesso");
    } else {
       reject("Ops! Deu falha");
    }
  });
}

parouimpar()
  .then((mensagem) => {
    console.log("Número validado é par ", mensagem);
  })
  .catch((erro) => {
    console.log("Error: número informado é impar " + erro);
  });