class produto {
  nome;
  preco;
  quantidade;

constructor(valorNome, valorPreco, valorQuantidade) {
  this.nome = valorNome
  this.preco = valorPreco
  this.quantidade = valorQuantidade
}

vender(quantidadeVendida){
if (quantidadeVendida > this.quantidade) {
  console.log(`Quantidade pedida excedeu ao estoque, temos no estoque ${this.quantidade} unidades disponíveis`)
} else {
    console.log("VocÊ comprou")
  }

}
}


const caneta = new produto("Caneta", 2, 10)
caneta.vender(11)
