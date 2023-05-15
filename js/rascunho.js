function mensagem(a){
    console.log(` a mensagem ${a}, foi exibida após três segundos`)
}

setTimeout(mensagem,3000,"matheus")

const msg = ()=> console.log("esta mensagem sem parametro foi exibida após 3 segundos")
setTimeout(msg,3000)