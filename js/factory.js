function criarProduto(nCliente, tempoEmbalgem){
    return {
        nome: nCliente,
        tempo: tempoEmbalgem
    }
}

let agco = criarProduto('AGCO', 150)
let knorr = criarProduto('Knorr', 200)
console.log(agco)
console.log(knorr)
console.log(criarProduto('novelis', 300))

function criarProduto2(nome, tempo){
    return {
        nome,
        tempo
    }
}

console.log(criarProduto2('Gerdau', 300))

function criarProduto3(){
    return {
        nome: 'Elgin',
        tempo: 200
    }
}
console.log(criarProduto3())