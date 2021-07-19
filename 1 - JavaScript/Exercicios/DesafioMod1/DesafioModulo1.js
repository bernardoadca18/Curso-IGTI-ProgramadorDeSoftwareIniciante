/*  Enunciado
    1 - Função que retorna o funcionário com maior salário.
    2 - Função que retorna o funcionário com menor salário.
    3 - Função que retorna a média salarial.
    4 - Função que recebe um setor como parâmetro e retorna o funcionário com maior salário.
    5 - Função que recebe um setor como parâmetro e retorna o funcionário com menor salário.
    6 - Função que recebe um setor como parâmetro e retorna a média salarial do setor.
*/

var fs = require('fs');
var funcionariosString = fs.readFileSync("./funcionarios.json").toString();
var funcionariosObj = JSON.parse(funcionariosString);
var funcionarios = funcionariosObj.funcionarios;

var setores = [];

for(var i = 0; i < funcionarios.length; i++)
{
    setores.push(funcionarios[i].setor);
}

setores = new Set(setores);
setores = Array.from(setores);

console.log("Funcionário com maior salário: " + maiorSalario());
console.log("Funcionário com menor salário: " + menorSalario());
console.log("Média Salarial: " + mediaSalarial() + "\n");

for(var i = 0; i < setores.length; i++)
{
    console.log(setores[i]);
    console.log("Funcionário com maior salário no setor " + setores[i] + ": " + maiorSalarioSetor(setores[i]));
    console.log("Funcionário com menor salário no setor " + setores[i] + ": " + menorSalarioSetor(setores[i]));
    console.log("Média Salarial do setor " + setores[i] + ": "  + mediaSalarialSetor(setores[i]) + "\n");
}

function maiorSalario()
{
    var funcionarioMaiorSalario;
    var maiorSalarioVar = funcionarios[0].salario;

    for(var i = 0; i < funcionarios.length; i++)
    {
        if(funcionarios[i].salario >= maiorSalarioVar)
        {
            maiorSalarioVar = funcionarios[i].salario;
            funcionarioMaiorSalario = funcionarios[i];
        }
    }
    return JSON.stringify(funcionarioMaiorSalario);
}

function menorSalario()
{
    var funcionarioMenorSalario;
    var menorSalarioVar = funcionarios[0].salario;

    for(var i = 0; i < funcionarios.length; i++)
    {
        if(funcionarios[i].salario <= menorSalarioVar)
        {
            menorSalarioVar = funcionarios[i].salario;
            funcionarioMenorSalario = funcionarios[i];
        }
    }
    return JSON.stringify(funcionarioMenorSalario);
}

function mediaSalarial()
{
    var folhaSalarial = 0;

    for(var i = 0; i < funcionarios.length; i++)
    {
        folhaSalarial += funcionarios[i].salario;
    }
    
    return folhaSalarial/funcionarios.length;
}

function maiorSalarioSetor(setor)
{
    var funcionarioMaiorSalarioSetor;
    var maiorSalarioSetorVar = 0;

    for(var i = 0; i < funcionarios.length; i++)
    {
        if((funcionarios[i].setor === setor) && (funcionarios[i].salario >= maiorSalarioSetorVar))
        {
            maiorSalarioSetorVar = funcionarios[i].salario;
            funcionarioMaiorSalarioSetor = funcionarios[i];
        }
    }

    return JSON.stringify(funcionarioMaiorSalarioSetor);
}

function menorSalarioSetor(setor)
{
    var funcionarioMenorSalarioSetor;
    var menorSalarioSetorVar = 9500;

    for(var i = 0; i < funcionarios.length; i++)
    {
        if((funcionarios[i].setor === setor) && (funcionarios[i].salario <= menorSalarioSetorVar))
        {
            menorSalarioSetorVar = funcionarios[i].salario;
            funcionarioMenorSalarioSetor = funcionarios[i];
        }
    }

    return JSON.stringify(funcionarioMenorSalarioSetor);
}

function mediaSalarialSetor(setor)
{
    var folhaSalarialSetor = 0;
    var funcionariosSetor = 0;
    for(var i = 0; i < funcionarios.length; i++)
    {
        if(funcionarios[i].setor === setor)
        {
            folhaSalarialSetor += funcionarios[i].salario;
            funcionariosSetor++;
        }
    }

    return folhaSalarialSetor/funcionariosSetor;
}