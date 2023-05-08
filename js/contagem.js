function contar(){
    var iniciostr = document.getElementById('iinicio')
    var inicio = Number(iniciostr.value)
    var fimstr = document.getElementById('ifim')
    var fim = Number(fimstr.value)
    var passostr = document.getElementById('ipasso')
    var passo = Number(passostr.value)
    var mostre = document.getElementById('para')
    mostre.innerHTML = 'Contando'
    for(var num = inicio; num<=fim; num += passo){
        mostre.innerHTML += ` ${num},`
    }
}