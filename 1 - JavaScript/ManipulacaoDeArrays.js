//#region Parte 1

var carros = ["Gol", "Palio", "Uno", "Sandera"];

//Pop remove o ultimo elemento do array e retorna-o.
var carro = carros.pop();

/*
console.log(carro);
console.log(carros);
*/

//Push insere o elemento no fim do array e retorna o seu novo tamanho.
var x = carros.push("Ford KA");

/*
console.log(carros);
console.log(x);
*/

//Shift remove o primeiro elemento do array e retorna-o e atualiza os outros índices.
carro = carros.shift();

/*
console.log(carro);
console.log(carros);
*/

//Unshift insere um elemento no inicio do array e empurra os outros, retornando o novo tamanho do array.
x = carros.unshift("Onix");

/*
console.log(carros);
console.log(x);
*/

//#endregion


//#region Parte 2

//Atualizar elemento específco do indice informado
carros[2] = "Novo Uno"


//Remove um elemento específico, deixando-o como empty
//delete carros[2];


//Primeiro parametro: posição inicial
//Segundo parametro: quantos elementos serao removidos a partir da posição incial
//Terceiro e demais parametros: elementos que serao adicionados, em ordem a partir da posicao inicial
carros.splice(2, 0, "HRV", "Creta");
//console.log(carros);

carros.splice(2, 1);
//console.log(carros);

//Concat junta um array com outro e retorna o novo array criado.
var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var carrosAntigos2= ["Corcel", "Chevette"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);

//console.log(todosCarros);


//Slice cria um novo array sem alterar o array originally
//Primeiro parametro: posicao inicial
//Segundo parametro(opcional): posicao final
var novoArray = todosCarros.slice(1);
//console.log(novoArray);

var novoArray2 = todosCarros.slice(2, 5);
console.log(todosCarros);
console.log(novoArray2);
//#endregion