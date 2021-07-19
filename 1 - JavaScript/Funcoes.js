function multiplicacao(p1, p2)
{
    console.log("Função Multiplicação executada");
    return p1 * p2;
}

function saudacao(nome)
{
    console.log("Olá " + nome + " seje bem vindo(a)");
}

function funcaSemParametro()
{
    var a = 1;
    var b = 2;
    console.log(a + b);
}

console.log(resultado);

var resultado = multiplicacao(4, 3);
console.log(resultado);
console.log(multiplicacao(10, 2));

funcaSemParametro();