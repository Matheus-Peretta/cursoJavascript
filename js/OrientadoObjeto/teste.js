const times = {}

const time = "equipe"
const equipe1 = "santos"

times[time] = equipe1
console.log(times)

const equipe2 = "são paulo"
const equipe3 = "palmeiras"

const equipes = {
    equipe2,
    equipe3
}

console.log(equipes)

Object.freeze(equipes)
Object.freeze(times)

