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
  repor(reporQuantidade) {
    this.quantidade += reporQuantidade
    console.log(`agora temos ${this.quantidade} quantidades`)
   }


}


const caneta = new produto("Caneta", 2, 10)
caneta.vender(5)
caneta.repor(5)
