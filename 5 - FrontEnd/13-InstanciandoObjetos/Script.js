function Retangulo(altura, largura)
{
    this.altura = altura;
    this.largura = largura;
    this.area = getArea;
}

function getArea()
{
    return this.altura * this.largura;
}

var r1 = new Retangulo(12, 8);  //Instância do objeto
var r2 = {altura: 8, largura: 4};

var fn1 = getArea.bind(r1);

console.log(r1);
console.log(r2);
console.log(r1 instanceof Retangulo);
console.log(r2 instanceof Retangulo);
console.log(fn1());