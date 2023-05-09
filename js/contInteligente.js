function digitarDados(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if(num1 == num2){
        num1 = 0
        num2 = 0
        document.getElementById('aparecendo').innerHTML += `<p>Contando de ${num1} até ${num2}</p>`
        document.getElementById('aparecendo').innerHTML += `<p>Não é possível contar, pois os números são iguais</p>`
    } else{
    for(let i = num1;i<=num2; i++){
        document.getElementById('aparecendo').innerHTML += `${i}, `
        } 
    } 
}