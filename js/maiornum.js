function digitarDados(){
    let num1 = window.parseInt(prompt('Digite um número: '))
    let num2 = window.parseInt(prompt('Digite outro número: '))

    if(num1 > num2){
        document.getElementById('aparecendo').innerHTML = `<p>analisando os valores ${num1} e ${num2}. O maior valor é ${num1}</p>`
    } else if(num2 > num1){
        document.getElementById('aparecendo').innerHTML = `<p>analisando os valores ${num1} e ${num2}. O maior valor é ${num2}</p>`
    } else{
        document.getElementById('aparecendo').innerHTML = `<p>analisando os valores ${num1} e ${num2}. Os dois valores são iguais</p>`
    }
}