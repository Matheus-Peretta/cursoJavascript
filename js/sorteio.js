function digitarDados(){
    let sorte = Math.floor(Math.random()*101)
    let aparece = document.getElementById('aparecendo').innerHTML += `<p>Acabei de pensar no número ${sorte}</p>`
    console.log(sorte)
}
function limpar(){
    document.getElementById('aparecendo').innerHTML = ''
}