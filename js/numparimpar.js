function digitarDados(){
    let num = window.parseInt(prompt('Digite um Número: '))
    if(num % 2 == 0){
        document.getElementById('aparecendo').innerHTML = `O número (${num}) digitado que foi digitado é par`
    } else{
        document.getElementById('aparecendo').innerHTML = `O número (${num}) digitado que foi digitado é ímpar`
    }
}