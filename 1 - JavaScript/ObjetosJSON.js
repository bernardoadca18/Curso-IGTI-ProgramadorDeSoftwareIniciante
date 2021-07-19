var pessoa = 
{
    Nome: "João",
    Idade: 40,
    Telefone: "(99) 99999-9999",
    TemCarro: true,
    AnimaisDeEstimacao:
    [
        "Totó",
        "Bob"
    ],
    Pai:
    {
        Nome: "José",
        Idade: 31,
        Telefone: "(99) 99999-9998",
        temCarro: true,
    },
};

//console.log(pessoa);
//console.log(pessoa.Nome);
//console.log(pessoa.Pai.Nome);
//pessoa.AnimaisDeEstimacao.push("Billy");
//pessoa.Nome += " Silva";
//pessoa.Pai.Nome += " Silva";
//console.log(pessoa);
pessoa.Mae = 
{
    Nome: "Maria",
    Idade: 26,
    Telefone: "(99) 99999-9997",
    temCarro: true,
};

console.log(JSON.stringify(pessoa));

/*SalvarDadosPessoa(pessoa);

function SalvarDadosPessoa(Pessoa)
{
    console.log(Pessoa);
}
*/
