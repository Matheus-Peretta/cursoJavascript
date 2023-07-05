const aluno = {
    nome: 'matheus',
    ra: 123,
    turma: '8a'
}

function funcaoCallback(aluno, indice){
    console.log(aluno, indice + 1)
}

console.log(Object.entries(aluno))
console.log(Object.entries(aluno).forEach(funcaoCallback))