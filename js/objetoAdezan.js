function salvar(){
    var cliente = document.getElementById('cliente').value
    var tempoTotal = document.getElementById('tempototal').value

    let NovoCliente = new Object
    NovoCliente.nome = cliente
    NovoCliente.produtividade
    NovoCliente.tempo = tempoTotal
    NovoCliente.pcp = function(){
        return this.produtividade = (60/this.tempo) * 8
    } 

    console.log(NovoCliente.pcp())
    document.getElementById('res').innerHTML = `A produtividade da ${NovoCliente.nome} é de ${NovoCliente.pcp()}`
}