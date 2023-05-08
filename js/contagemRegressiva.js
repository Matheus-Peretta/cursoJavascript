function digiteNum(){
    for(let i = 10; i>=1; i--){
        if(i==1){
            document.getElementById('aparecendo').innerHTML +=`${i}`  
        }else{
            document.getElementById('aparecendo').innerHTML +=`${i}, `
        }        
    }
}