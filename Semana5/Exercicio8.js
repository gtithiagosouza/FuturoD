class Pessoa {
  nome;
  idade;
  profissao;
  
  constructor(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
  }
}


class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde){
    super(nome, idade, profissao)
    this.telefone = telefone
    this.email = email
    this.clienteDesde = clienteDesde
  }
}


const clienteThiago = new Cliente("Thiago", 35, "Estudante", "1111111111", "email@gmail.com", "2010-02-12")
console.log(clienteThiago)
