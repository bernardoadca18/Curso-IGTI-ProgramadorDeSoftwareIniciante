function soma(a, b)
{
    return a + b;
}

function retangulo(altura, largura)
{
    this.altura = altura;
    this.largura = largura;

    this.area = function(){
        return this.largura * this.altura;
    }
}

//Arrow Functions

var somaV2 = (a, b) => a + b;

function retanguloV2(altura, largura)
{
    this.altura = altura;
    this.largura = largura;

    this.area = () => this.altura * this.largura;
}

var r1 = new retanguloV2(6, 9);
var fn = r1.area();
var imprimeMens = m => console.log(m);

console.log(soma(6, 9));
console.log(somaV2(1, 7));
console.log(fn);
imprimeMens("Mensagem");