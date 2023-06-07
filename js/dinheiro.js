const dinheiro = 1303.79
let dinheiroFormatado = dinheiro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
console.log(dinheiroFormatado)