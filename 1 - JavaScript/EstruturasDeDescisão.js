//#region Parte 1
var a = 50;
var b = 40;

if(a > b)
{
    console.log("A é maior que B");
}
else if(b > a)
{
    console.log("B é maior que A");
}
else
{
    console.log("A e B têm o mesmo valor");
}

if(a > b)
{
    console.log("Executar somente se A for maior que B");
}
console.log("Sempre executar");

var c  = 40;
var d = 40;

if(c >= d)
{
    console.log("C é maior ou igual a D");
}

if(d <= c)
{
    console.log("D é menor ou igual a C");
}

var e = 10;
var f = "10";

if(e == f)
{
    console.log("E é igual a F");
}

var g = 10;
var h = "10";

if(g != h)
{
    console.log("G é diferente de H");
}
//#endregion

//#region Parte 2
var i = 4;
var j = 3;
var k = 5;
var l = 5;

if((i > j) && (l > k))
{
    console.log("I é maior que J");
    console.log("L é maior que K");
}

if((i === j || k === l))
{
    console.log("I é igual a J ou K é igual a L");
    if(k === 5)
    {
        console.log("K é igual a 5");
    }
    else
    {
        if(k === 4)
        {
            console.log("K é igual a 4");
        }
        else if (k === 3)
        {
            console.log("K é igual a 3");
        }
    }
}

console.log(!(1>2));
if(!(1 > 2))
{
    console.log("Execute");
}


var fruta = "abacaxi";
var valor = 0;

if(fruta === "banana")
{
    valor = 2;
}
else if(fruta === "maca")
{
    valor = 3;
}
else if(fruta === "abacaxi")
{
    valor = 4;
}
else if(fruta === "melao")
{
    valor = 5;
}
else if(fruta === "mamao")
{
    valor = 5.50;
}
else
{
    valor = 10;
}

console.log("Valor: " + valor);

switch(fruta)
{
    case "banana":
        {
            valor = 2;
            break;
        }
    case "maca":
        {
            valor = 3;
            break;
        }
    case "abacaxi":
        {
            valor = 4;
            break;
        }
    case "melao":
        {
            valor = 5;
            break;
        }
    case "mamao":
        {
            valor = 5.50;
            break;
        }
    default:
        valor = 10;
    
}

console.log("Valor: " + valor);


var x = 3;
var y = 2;
var resultado = "";

if(x > y)
{
    resultado = "X é maior que Y";
}
else
{
    resultado = "Senão";
}
console.log(resultado);

resultado = x > y ? "X é maior que Y" : "Senão";

console.log(resultado);
//#endregion