const digitarDados = function digitarDados(){
    let nome = window.prompt('Qual o nome do aluno? ')
    let nota1 = window.parseInt(prompt(`Qual nota ${nome} tirou na primeira prova? `))
    let nota2 = window.parseInt(prompt(`Qual nota ${nome} tirou na segunda prova? `))

    let calcularMedia = (nota1 + nota2) / 2
    
    let mostrandoDiv = document.getElementById('aparecendo')
    mostrandoDiv.innerHTML = `<p>Calculando a média final de ${nome}.</p>`+ `<p>As notas obtidas foram ${nota1} e ${nota2}.</p>` + `<p>A média final será ${calcularMedia}.</p>`

    if(calcularMedia<5){
        mostrandoDiv.innerHTML+= `<p>A mensagem que temos é: MEUS PARABÉNS</p>` 
    } else{
        mostrandoDiv.innerHTML+= `<p>A mensagem que temos é: ESTUDE UM POUCO MAIS</p>`
    }
}
