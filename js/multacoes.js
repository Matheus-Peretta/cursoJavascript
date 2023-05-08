function digiteNum(){
    let valor1 = window.parseInt(prompt('Primeiro Valor: '))
    let valor2 = window.parseInt(prompt('Segundo Valor: '))

    let operacaoEscolhida = window.prompt(`Os valores informados foram ${valor1} e ${valor2}.
    O que vamos fazer agora?
    [1]Somar
    [2]Subtrair
    [3]Multiplicar
    [4]Dividir`)

    if(operacaoEscolhida == '1'){
        var resultado = valor1 + valor2
        document.getElementById('aparecendo').innerHTML = `<h1>Calculando...</h1><p>${valor1}+${valor2}=${resultado}</p>`
    } else if(operacaoEscolhida == '2'){
        var resultado = valor1 - valor2
        document.getElementById('aparecendo').innerHTML = `<h1>Calculando...</h1><p>${valor1}-${valor2}=${resultado}</p>`
    } else if(operacaoEscolhida == '3'){
        var resultado = valor1*valor2
        document.getElementById('aparecendo').innerHTML = `<h1>Calculando...</h1><p>${valor1}x${valor2}=${resultado}</p>`
    } else if(operacaoEscolhida == '4'){
        var resultado = valor1/valor2
        document.getElementById('aparecendo').innerHTML = `<h1>Calculando...</h1><p>${valor1}/${valor2}=${resultado}</p>`
    } else{
        document.getElementById('aparecendo').innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${valor1} e ${valor2}, mas não sei o que fazer com eles.`
    }
}