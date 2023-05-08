function digiteNum(){
    let valorTeclado = document.getElementById('inum').value
    document.getElementById('aparecendo').innerHTML=`<h2>Contando até ${valorTeclado}</h2>`
    for(let i = 0;i<=valorTeclado;i++){
        if(i==valorTeclado){
            document.getElementById('aparecendo').innerHTML+=`<strong>${i}</strong>`
        }else{
            document.getElementById('aparecendo').innerHTML+=`<strong>${i}</strong>, `
        }
    }
}