/* Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:

(1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido
Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade. */

let produto1 = 0
let produto2 = 0
let produto3 = 0
let produto4 = 0
let produto5 = 0

while (true) {

var produto = Number(prompt("(1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido"))

if (produto === 6) {
  break;
}

let quantidade = Number(prompt("Digite a quantidade de produtos"));

switch(produto) {
  case 1:
      produto1 += quantidade
      break;
   case 2:
      produto2 += quantidade
      break
  case 3:
      produto3 += quantidade
      break
  case 4:
      produto4 += quantidade
      break
   case 5:
      produto5 += quantidade
      break

   default:
    alert("digite uma opção disponivel")
}
}
alert(`Quantidade de produtos que o cliente comprou:
  Hortifruti ${produto1}
  Laticínios ${produto2}
  Carnes ${produto3}
  Peixes ${produto4}
  Aves ${produto5}`);