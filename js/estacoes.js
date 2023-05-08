function digiteNum(){
    let mes = window.prompt('Digite o mês em extenso (ex:Setembro)')
    let estacao
    switch(mes.toUpperCase()){
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'Verão'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'Outono'
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'Inverno'
            break
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'Primavera'
            break
        default:
            estacao = 'Indefinido' 
    }
    document.getElementById('aparecendo').innerHTML = `No mês de ${mes}, estamos na estação <strong>${estacao}</strong>`
}
