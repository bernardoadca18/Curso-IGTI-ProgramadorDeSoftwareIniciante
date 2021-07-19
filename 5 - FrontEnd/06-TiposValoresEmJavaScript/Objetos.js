//Objetos

var aluno1 = 
{
    Matricula: 7,
    Nome: "Bernardo",
    Curso: "Bootcamp Frontend",
    Ativo: true,
};

aluno1.dataNascimento = "02/09/2002";

console.log(aluno1.Nome);
console.log(aluno1.Curso);
console.log(aluno1.Matricula);
console.log(aluno1.Ativo);
console.log(aluno1.dataNascimento);

delete aluno1.dataNascimento;
aluno1.Nome = undefined;
aluno1.Matricula = null;

console.log(aluno1);

//Arrays

var frutas = ["Banana", "Maçã", "Beterraba", "Rabanete", "Limão", "Laranja"];
frutas.push("Tomate");

console.log(frutas[Math.floor(Math.random() * frutas.length)]);