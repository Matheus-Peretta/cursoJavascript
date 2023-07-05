const pessoa = {
    nome: 'matheus',
    idade: 21,
    peso: 55
}

Object.defineProperty(pessoa, 'registroGeral', {
    enumerable: true,
    writable: false,
    value: 1245275
})

console.log(pessoa)
console.log(pessoa.registroGeral)