const jogador = {
    nome: 'neymar',
    clube: 'psg',
    salario: 1000000,
    posicao: 'atacante'
}

console.log(Object.values(jogador))
console.log("Salário: " + jogador.salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))