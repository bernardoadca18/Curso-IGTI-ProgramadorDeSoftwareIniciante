let primos = [2, 3, 5, 7, 11, 13];

let curso = 
{
    Nome: "Bootcamp Front-End",
    Modulos: 4,
    Presencial: false,
    Turma: 1,
};

let[p1, p2, p3, ...resto] = primos;
let{Nome: NomeCurso, Turma, ...outros} = curso;

console.log(primos);
console.log(curso);
console.log(p1);
console.log(p2);
console.log(resto);
console.log(NomeCurso);
console.log(Turma);
console.log(outros);

function imprime({Nome})
{
    console.log(Nome);
}

imprime(curso);