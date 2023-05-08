let sorte
function digitarDados(){
    let min = 1
    let max = 100
    sorte = Math.trunc(Math.random()*max)
}
function sorteando(){
    let teclado = window.parseInt(prompt('Qual é o seu palpite? '))
    if(teclado < sorte){
        document.getElementById('aparecendo').innerHTML += `<p>Você falou ${teclado}. O meu número é <strong>maior</strong>. Clique em mim novamente</p>`        
    } else if(teclado > sorte){
        document.getElementById('aparecendo').innerHTML += `<p>Você falou ${teclado}. O meu número é <strong>menor</strong>. Clique em mim novamente</p>`
    } else if(teclado == sorte){
        document.getElementById('aparecendo').innerHTML += `<p>PARABÉNS!!! Você acertou! Eu tinha sorteado o número ${sorte}</p>`
        document.getElementById('jogarnovamente').style.display='inline-block'
    }
}
function limpar(){
    window.location.reload()
}
