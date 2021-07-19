class Retangulo
{
    constructor(altura, largura)
    {
        this.altura = altura;
        this.largura = largura;
    }

    area()
    {
        return this.altura * this.largura;
    }

    imprimeNome()
    {
        console.log("Retângulo");
    }
}

class Quadrado extends Retangulo
{
    constructor(dimensao)
    {
        super(dimensao, dimensao);
    }

    imprimeNome()
    {
        console.log("Quadrado");
    }
}

var r1 = new Retangulo(3, 7);
var r2 = new Retangulo(30, 70);

var q1 = new Quadrado(7);


r1.imprimeNome();
console.log(r1);
console.log(r1.area() + "\n");

r2.imprimeNome();
console.log(r2);
console.log(r2.area() + "\n");

q1.imprimeNome();
console.log(q1)
console.log(q1.area() + "\n");