function salvar(){
    var cliente = document.getElementById('cliente').value
    var tempoTotal = document.getElementById('tempototal').value
    var produtividade

    function classe(cliente, tempoTotal){
        return {
            cliente,
            tempoTotal,
            pcp(){
                produtividade = (60/this.tempo) * 8
            }
        }
    }

    let pcp2 = new classe(cliente, tempoTotal)

    document.getElementById('res').innerHTML = `A produtividade da ${pcp1.cliente} é de ${pcp2.pcp()}`
}