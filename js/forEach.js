const jogadores = ["messi", "neymar", "ronaldo", "suarez"]
const chamarVolta = (jogador) => console.log(jogador)
jogadores.forEach(chamarVolta)

console.log("=====================")

const goleiros = ["de gea", "martinez", "cassio", "alisson"]
goleiros.forEach(function(goleiro){
    console.log(goleiro)
})

console.log("=====================")

const times = ["São Paulo", "Corinthians", "Santos", "Palmeiras"]
const chamarVolta2 = (time, indice, array) => console.log(indice + 1, time, array)
times.forEach(chamarVolta2)
