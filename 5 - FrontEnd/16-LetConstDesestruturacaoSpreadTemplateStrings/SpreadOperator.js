let primos = [2, 3, 5, 7, 11, 13];

let curso = 
{
    Nome: "Bootcamp Front-End",
    Modulos: 4,
    Presencial: false,
    Turma: 1,
};

let primos1 = [1, ...primos, 17];

let curso1 = {
    ...curso,
    Descricao: "SIM.",
    ativo: true,
};

let curso3 = {...curso};

console.log(primos);
console.log(primos1);
console.log(curso);
console.log(curso1);
console.log(curso3 === curso);