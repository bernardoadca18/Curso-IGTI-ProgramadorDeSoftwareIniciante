var palavra = "arara";
var palavraInvertida = "";

for(var i = palavra.length - 1; i >= 0; i--)
{
    palavraInvertida += palavra[i];
}

if(palavraInvertida === palavra)
{
    console.log(palavra + " é um palindromo.");
}
else
{
    console.log(palavra + " não é um palindromo.");
}