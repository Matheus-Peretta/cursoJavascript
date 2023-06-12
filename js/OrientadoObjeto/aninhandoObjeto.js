let obj = new Object
obj.nome = "Matheus"
obj.cpf = 215144221
obj.saldo = 20
obj.sacar = function(saque){
    return this.saldo -= saque
}
console.log(obj)
console.log(obj.sacar(10))

let carro = {
    marca: "Fiat",
    nome: "Argo",
    ano: 2020,
    preco: 130000,
    proprietario: {
        nome: "Matheus",
        idade: 21,
        cpf: "898532",
        endereco: {
            rua: "joazinho do abc",
            n: 90,
            bairro: "vila tesouro"
        }
    },
    caractericaCarro: {
        cor: "preto",
        portas: 4,
        placa: "dfr5612"
    },
    prestacao(valor){
        let pagar = this.preco - valor
        console.log(pagar)
    }
}

carro.prestacao(1000)
console.log(carro.proprietario.endereco.bairro)
console.log(carro.caractericaCarro.cor)
delete carro.caractericaCarro
console.log(carro.caractericaCarro)