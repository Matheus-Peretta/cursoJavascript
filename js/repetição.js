function digiteNum(){
    document.getElementById('aparecendo').innerHTML += `<h2>Contando de 1 a 10</h2>`
    let cont = 0
    for(let i = 1; i<=10; i++){
        document.getElementById('aparecendo').innerHTML += `${i}, `
    }
}