function digiteNum(){
    document.getElementById('aparecendo').innerHTML += `<h2>Contando até 10, marcando os pares </h2>`
    for(let i = 1; i<=10; i++){
        if(i%2==0){
            document.getElementById('aparecendo').innerHTML += `<mark> ${i} </mark>, `
        } else{
            document.getElementById('aparecendo').innerHTML += `${i}, `
        }
    }
} 