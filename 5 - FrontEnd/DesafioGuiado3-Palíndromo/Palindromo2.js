function palindromo(palavra)
{
    var palavraInvertida = "";
    for(var i = palavra.length - 1; i >= 0; i--)
    {
        palavraInvertida += palavra.charAt(i);
    }
    
    if(palavraInvertida.toUpperCase() === palavra.toUpperCase())
    {
        console.log("A palavra " + palavra + " é um palíndromo.");
    }
    else
    {
        console.log("A palavra " + palavra + " não é um palíndromo.");
    }
}

palindromo("");