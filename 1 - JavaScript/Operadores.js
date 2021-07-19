//#region Parte 1
var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 9 * 7;
var divisao = 40 / 5;
var resto = 20 % 3;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Resto: " + resto);

var num1 = 10;
var num2 = 50;
var resultado  = (num2 + num1) / (8 + 2);

console.log("Resultado: " + resultado + "\n");
//#endregion


//#region  Parte 2
var incremento = 1;
incremento = incremento + 3;
incremento += 2;
incremento++;

console.log("Incremento: " + incremento);


var incrementoA = 5;
incrementoA += 6;
console.log("IncrementoA: " + incrementoA);


var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("Decremento: " + decremento);


var decrementoA = 10;
decrementoA -= 4;
console.log("DecrementoA: " + decrementoA);


var atribuicaoComMultiplicacao = 4;
atribuicaoComMultiplicacao *= 5;
console.log("Atribuição com Multiplicação: " + atribuicaoComMultiplicacao);


var atribuicaoComDivisao = 20;
atribuicaoComDivisao /= 5;
console.log("Atribuição com Divisao: " + atribuicaoComDivisao);


var a = 4;
var b = 3;
var adicaoIncrementoPosterior = a + b++;
console.log("AdicaoIP: " + adicaoIncrementoPosterior);


var adicaoIncrementoAnterior = a + ++b;
console.log("AdicaoIA: " + adicaoIncrementoAnterior)


var c = 5;
var d = 6;

var subtracaoDecrementoPosterior = c + d--;
console.log("SubtraçãoDP: " + subtracaoDecrementoPosterior);

var subtracaoDecrementoAnterior = c + --d;
console.log("SubtraçãoDA: " + subtracaoDecrementoAnterior);
//#endregion