var num1 = parseInt(process.argv[2]);
var operacao = process.argv[3];
var num2 = parseInt(process.argv[4]);

var resultado;

switch (operacao) 
{
    case "+":
        resultado = num1 + num2;
        break;
    case "-" :
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    case "Resto":
        resultado = num1 % num2;
        break;
    case "%":
        resultado = num1 * 0.01 * num2;
        break;
    default:
        resultado = 0;
}

console.log(resultado);