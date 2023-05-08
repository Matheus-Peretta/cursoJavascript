function digitarDados(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')

    let hoje = new Date()
    let dia = hoje.getDate()
    let mês = hoje.getMonth()
    let ano = hoje.getFullYear()
    let diaSem = hoje.getDay()
    let horas = hoje.getHours()
    let minutos = hoje.getMinutes()
    let seg = hoje.getSeconds()

    document.getElementById('aparecendo').innerHTML = `<p>Dia: ${dia}</p>` + `<p>Mês: ${meses[mês]}</p>` + `<p>Ano: ${ano}</p>`+ `<p>Dia da Semana: ${semana[diaSem]}</p>` + `<p>Horas: ${horas}</p>` + `<p>Minutos: ${minutos}</p>` + `<p>Segundos: ${seg}</p>`
}