const fnc = function (x,y){
    return console.log(x+y)
}

fnc(2,3)

const fnc2 = function(x,y){
    return x+y
}

const mostraNaTela = function(x,y,outroPar = fnc2){
    console.log(outroPar(x,y))
}

mostraNaTela(10,3)

mostraNaTela(10,3,(x,y) => x-y)

mostraNaTela(10,3, function(x,y){
    return x*y
})

const obj = {
    falar: ()=> console.log("Bons estudos"),
    falarNovamente: function(){
        console.log("Por hoje é só, até mais")
    }
}

obj.falar()
obj.falarNovamente()