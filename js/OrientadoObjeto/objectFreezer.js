const pessoa = {nome: "Matheus", idade: 21}
Object.freeze(pessoa)
console.log(pessoa)
pessoa.nome = "Ana"
pessoa.cpf = 123
console.log(pessoa)

//outro exemplo

const outraPessoa = Object.freeze({nome: "matheus", idade: 21})
console.log(outraPessoa)