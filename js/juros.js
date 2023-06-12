function jurosSimples(capitalInicial, taxaJuros, tempoAplicaçãoMeses){
    let tj = taxaJuros / 100
    let juros = capitalInicial * tj * tempoAplicaçãoMeses
    let res = juros + capitalInicial
    return console.log(res)
}

function jurosComposto(capitalInicial, taxaJuros, tempoAplicaçãoanos){
    let tj = taxaJuros / 100
    let juros = capitalInicial * ((1 + tj) ** tempoAplicaçãoanos)
    return console.log(juros)
}

jurosSimples(400, 5, 4)
jurosComposto(1400, 7, 2)