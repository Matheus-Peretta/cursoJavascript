function Produto(nome, valor, desc){
    this.nome = nome
    this.descProd = function(){
        return valor * (1 - desc)
    }
}

let p1 = new Produto("Controle Remoto", 10, 0.15)

console.log(p1)
console.log(p1.descProd())

//OUTRO EXEMPLO: 
function ContaBanco(proprietario, saldo, nConta){
    this.proprietario = proprietario
    this.sacar = function(saque){
        return saldo = saldo - saque
    }
}

let c1 = new ContaBanco("Matheus", 10, 123)
console.log(c1.sacar(2))
console.log(c1.saldo)

//CRIANDO OBJETO COM A FUNÇÃO FACTORY:
function obj(proprietario, valor, nConta){
    return {
        proprietario,
        valor,
        nConta,
        sacar(saque){
            this.valor = valor - saque 
        }
    }
}

let obj1 = obj("Matheus", 1200, 123)
console.log(obj1)
obj1.sacar(200)
console.log(obj1.valor)