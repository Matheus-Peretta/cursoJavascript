function digitarDados(){
    let num = document.getElementById('num1').value
    if(num == 0){
        num = 0
    }
    document.getElementById('aparecendo').innerHTML = `Tabuada do ${num}`

    for(let i=0;i<=10;i++){
        let res = num*i
        document.getElementById('aparecendo').innerHTML += `<p>${num} x ${i} = ${res}</p>`
    }
}