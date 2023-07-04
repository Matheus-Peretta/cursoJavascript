const a = "eu"
const b = "Matheus"

const pessoa = {}
pessoa[a]= b
console.log(pessoa)

const conv1 = "joao"
const conv2 = "cauan"
const conv3 = "mae" 

const convidados = {conv1, conv2, conv3}
console.log(convidados)

const funcionarios = {
    soma: function(){
        return 1+1
    },
    somaSimplificada(){
        return 2+2
    }
}

console.log(funcionarios.somaSimplificada())
console.log(funcionarios.soma())