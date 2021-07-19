/*
O aluno deverá criar um programa que informará se determinado número é primo ou não.
Esse número deve ser definido diretamente em uma variável no código.
Um número primo é aquele que só é divisível por 1 e por ele mesmo. O número 1 não é
considerado um número primo.
Dizer que um número X é divisível por um número Y significa que o resto da divisão de X
por Y é igual a zero. Por exemplo, podemos dizer que 6 é divisível por 3, pois 6 dividido por
3 é igual a dois e resto 0. Já o número 7 não é divisível por 3, pois 7 dividido por 3 é 2 e
sobra 1 como resto.
Um exemplo de número primo é o número 13, pois ele é divisível somente por 1 e por 13.
Ao rodar o programa, ele deve listar no terminal se o número colocado na variável é primo
ou não.
Exemplo de saída considerando a variável no código como 10:
O número 10 não é primo.
Exemplo de saída considerando a variável no código como 13:
O número 13 é primo.
Durante o questionário, será perguntado se alguns números são primos ou não. Para
descobrir isso, você deve substituir no seu código a variável com o número que será
conferido
*/

var num = parseInt(process.argv[2]);

function primo(numero)
{
    var divisores = [];
    for(var i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            divisores.push(i);
        }
    }
    if(divisores.length <= 2)
    {
        return true;
    }
    return false;
}

if(primo(num) && (num > 1))
{
    console.log(num + " é um número primo.");
}
else if(!(primo(num)) && (num > 1))
{
    console.log(num + " não é um número primo.");
}
else
{
    console.log("Número menor ou igual a 1");
}

console.log("Números primos até " + num + ": ");

for(var j = 2; j <= num; j++)
{
    if(primo(j))
    {
        console.log(j);
    }
}