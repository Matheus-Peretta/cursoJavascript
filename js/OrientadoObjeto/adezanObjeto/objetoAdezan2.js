function salvar(){
    var cliente = document.getElementById('cliente').value
    var tempoTotal = document.getElementById('tempototal').value
    var produtividade

        function NovoCliente(cliente, tempoTotal){
        this.cliente = cliente
        this.tempoTotal = tempoTotal
        this.pcp = function(){
            return produtividade = (60/this.tempoTotal) * 8
        }
    }

    let pcp1 = new NovoCliente(cliente, tempoTotal)

    document.getElementById('res').innerHTML = `A produtividade da ${pcp1.cliente} é de ${pcp1.pcp()}`
}