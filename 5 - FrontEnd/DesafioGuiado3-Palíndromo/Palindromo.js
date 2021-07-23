function palindromo(palavra)
{
    var palavraInvertida = "";
    for(var i = palavra.length - 1; i >= 0; i--)
    {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida === palavra;
}

console.log(palindromo("AYAYAYAYAYA"));