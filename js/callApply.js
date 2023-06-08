function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 4538,
    desc: 0.15,
    getPreco
}

console.log("Aqui a função foi chamada através do objeto. Com a função sendo atirbuto do objeto produto " + produto.getPreco())
console.log("===========================================================================")
console.log("Aqui a função foi apenas chamada sozinha, com o this apontando para o escopo global " + getPreco())
console.log("===========================================================================")

const carro = {
    nome: "Fiesta",
    preco: 1000,
    desc: 0.15
}

console.log("Aqui foi usado o método call para dizer em qual escopo executar a função. O escopo escolhido foi o do objeto carro " + getPreco.call(carro))
console.log("===========================================================================")
console.log(getPreco.call("Aqui é a mesma coisa que acima, porém com parâmetros passados a função " + carro, 20, "U$"))
console.log("===========================================================================")
console.log("Aqui foi usado o método call para dizer em qual escopo executar a função. O escopo escolhido foi o do objeto produto " + getPreco.call(produto))
console.log("===========================================================================")

const carro2 = {
    nome: "Uno",
    preco: 3000,
    desc: 0.15
}

console.log(getPreco.apply(carro2))
console.log("===========================================================================")
console.log("Aqui foi utilizando o método apply e passando parâmetros com apply " + getPreco.apply(carro2, [300, 'U$']))
console.log("===========================================================================")
console.log(getPreco.call(carro2, 300, 'R$'))