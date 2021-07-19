function Retangulo(altura, largura)
{
    this.altura = altura;
    this.largura = largura;
    this.area = getArea();
    function getArea()
    {
        return this.altura * this.largura;
    }
}

var r1 = new Retangulo(12, 8);  //Instância do objeto 1
var r2 = new Retangulo(36, 24); //Instância do objeto 2


function RetanguloV2(altura, largura)
{
    this.altura = altura;
    this.largura = largura;
}

RetanguloV2.prototype.area = function()
{
    return this.altura * this.largura;
};

var r3 = new RetanguloV2(2, 9);
var r4 = new RetanguloV2(7, 99);

console.log(r3.area());
console.log(r4.area());
console.log((r3.area === r4.area) + (" ") + (r1.area === r2.area));