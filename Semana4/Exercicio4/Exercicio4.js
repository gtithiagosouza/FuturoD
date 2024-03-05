
function Exercicio4() {

  var nome = prompt("Digite o seu nome:");
  var idade = prompt("Digite a sua idade:");
  var email = prompt("Digite o seu email:");


  var info = {
    nome: nome,
    idade: idade,
    email: email
  };

  localStorage.setItem("user", JSON.stringify(info));

  console.log("Sucesso!");
}

Exercicio4();