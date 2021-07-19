var carros = ["Gol", "Palio", "Uno"];

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("Primeira posição: " + primeiroCarro);
console.log("Segunda posição: " + segundoCarro);
console.log("Terceira posição: " + terceiroCarro);

carros[2] = "Argo";

console.log(carros[2]);
console.log(terceiroCarro);

console.log("Quantidade de carros/Tamanho do array = " + carros.length);
console.log("Ultimo do array: " + carros[carros.length - 1]);

carros[3] = "Sandero";
console.log("Novo ultimo do array: " + carros[carros.length - 1]);

carros[carros.length] = "Fit";
console.log("Novo novo ultimo do array: " + carros[carros.length - 1]);

carros.push("Polo");
console.log(carros);

carros.push(123);
console.log(carros);