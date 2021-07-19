//#region Parte 1
for(var i=0; i < 10; i++)
{
    //console.log(i);
}

var carros = ["Gol", "Palio", "Uno", "Celta", "Sandero"];

//Ordem Crescente
for(var i2 = 0; i2 < carros.length; i2++)
{
    //console.log(carros[i2]);
}

//Ordem Descrescente
for(var i3 = carros.length - 1; i3 >= 0; i3--)
{
    //console.log(carros[i3]);
}
//#endregion


//#region Parte 2

var i = 0;
while(i < carros.length)
{
    //console.log(carros[i]);
    i++;
}

/*while(true)
{
    //console.log("Hola hermano");
}*/

var i = 0;
while(i < carros.length)
{
    //console.log(carros[i]);
    if(carros[i] === "Palio")
    {
        //console.log("Palio encontrado");
        break;
    }
    i++;
}

var numeros = [0,1,2,3,4,5,6,7,8,9,10];
var i = 0;
while(i < numeros.length)
{
    var num = numeros[i];
    i++;
    if(num % 2 === 0)
    {
        //console.log(num + " é par");
        continue;
    }

    //console.log(num + " é impar");
}

//#endregion


//#region  Parte 3

var j = 0;

do
{
    j++;
    //console.log(j);
}
while(j < 10);


for(var carro of carros)
{
    console.log(carro);
}

//#endregion