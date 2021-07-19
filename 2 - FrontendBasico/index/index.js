console.log("Hello World no arquivo externo");

//DOM = Document Object Model
function clickBotao()
{
    var paragrafo2 = document.getElementById("paragrafo2");
    //paragrafo2.innerHTML = "Texto alterado";
    paragrafo2.style.display = "none";

    //var paragrafos = document.getElementsByClassName(paragrafo);
    for(var i = 0; i<document.getElementsByClassName("paragrafo").length; i++)
    {
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
    }
}

function clickBotao2()
{
    var paragrafo2 = document.getElementById("paragrafo2");
    paragrafo2.style.display = "block";
    
    var botoes = document.getElementsByTagName("button");
    var i = 0;
    while (i<botoes.length)
    {
        botoes[i].style.fontSize = "20px";
        botoes[i].style.color = "green";
        i++;
    }
}

var quantidadeElementos = 0;

function adicionarElemento()
{
    var elemento = document.createElement("P");
    elemento.innerHTML = "elemento " + quantidadeElementos;
    quantidadeElementos++;
    document.getElementById("div-elementos").appendChild(elemento);
}

function removerElementos()
{
    var filhos = document.getElementById("div-elementos").childNodes;
    var size = filhos.length;
    for(var i = 0; i < size; i++)
    {
        document.getElementById("div-elementos").removeChild(filhos[0]);
    }
}