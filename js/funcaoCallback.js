const fabricantes = ["BMW","Audi","Mercedes"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)


//callback com parametros sendo passados:
const mensagem = function(msg){
    console.log(`esta mensagem(${msg}) foi exibida após três segundos`)
}

setTimeout(mensagem,3000, "gabi")//note que os parametros são passados após a vírgula

//callback sem parametros sendo passados:
const mensagem2 = ()=> console.log("mensagem exibida após 3 segundos")

setTimeout(mensagem2,3000)