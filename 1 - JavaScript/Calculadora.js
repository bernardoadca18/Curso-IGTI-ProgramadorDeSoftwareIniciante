var num1 = parseInt(process.argv[2]);
var operação = process.argv[3];
var num2 = parseInt(process.argv[4]);

var resultado = 0;

if(operação === "+")
{
    resultado = num1 + num2;
}
else if(operação === "-")
{
    resultado = num1 - num2;
}
else if(operação === "*")
{
    resultado = num1 * num2;
}
else if(operação === "/")
{
    resultado = num1 / num2;
}
else if(operação === "Resto")
{
    resultado = num1 % num2;
}
else if(operação === "%")
{
    resultado = num1 * 0.01 * num2;
}

console.log("Resultado: " + resultado);