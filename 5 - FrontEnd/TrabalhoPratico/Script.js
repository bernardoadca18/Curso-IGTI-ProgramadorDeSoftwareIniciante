//Valores
var valor = document.getElementById("valor");
var prazoAnos = document.getElementById("prazoAnos");
var jurosAoAno = document.getElementById("jurosAoAno");
var jurosPrestacoes = [];
var amortizacao;

//Elementos
var divResultados = document.getElementById("divResultados");
var divPrestacoes = document.getElementById("divPrestacoes");

function calcularPrazoMeses()
{
    var prazoMeses = 12*prazoAnos.valueAsNumber;
    return prazoMeses;
}

function calcularJurosMes()
{
    var jurosAoMes = (1 + jurosAoAno.valueAsNumber)**(1/12) - 1;
    return jurosAoMes;
}

function calcularJurosAcumulados()
{
    jurosPrestacoes = [];
    var debito = valor.valueAsNumber;
    var jurosAcumulados = 0;
    for(var i = 0; i < calcularPrazoMeses(); i++)
    {
        jurosPrestacoes.push((debito * calcularJurosMes()));
        jurosAcumulados += (debito * calcularJurosMes());
        debito -= amortizacao;
    }
    return jurosAcumulados.toFixed(2);
}

function criarElementos()
{
    amortizacao = (valor.valueAsNumber/(prazoAnos.valueAsNumber*12));
    var lPrazoMeses = document.getElementById("prazoMeses");
    var lJurosAoMes = document.getElementById("jurosAoMes");
    var lJurosAcumulados = document.getElementById("jurosAcumulados");

    var labelPrazoMeses = document.createElement("label");
    labelPrazoMeses.innerHTML = "Prazo (Meses): "
    labelPrazoMeses.id = "prazoMeses";

    var labelJurosMeses = document.createElement("label");
    labelJurosMeses.innerHTML = "Juros ao mês: "
    labelJurosMeses.id = "jurosAoMes";

    var labelJurosAcumulados = document.createElement("label");
    labelJurosAcumulados.innerHTML = "Juros Acumulados: ";
    labelJurosAcumulados.id = "jurosAcumulados";

    var campoPrazoMeses = document.createElement("input");
    campoPrazoMeses.value = calcularPrazoMeses();
    campoPrazoMeses.readOnly = true;
    campoPrazoMeses.type = "text";

    labelPrazoMeses.appendChild(campoPrazoMeses);

    var campoJurosMes = document.createElement("input");
    campoJurosMes.value = calcularJurosMes();
    campoJurosMes.readOnly = true;
    campoJurosMes.type = "text";

    labelJurosMeses.appendChild(campoJurosMes);

    var campoJurosAcumulados = document.createElement("input");
    campoJurosAcumulados.value = calcularJurosAcumulados();
    campoJurosAcumulados.readOnly = true;
    campoJurosAcumulados.type = "text";

    labelJurosAcumulados.appendChild(campoJurosAcumulados);

    lPrazoMeses.replaceWith(labelPrazoMeses);
    lJurosAoMes.replaceWith(labelJurosMeses);
    lJurosAcumulados.replaceWith(labelJurosAcumulados);

    var tabela = document.getElementById("tabela");

    tabela.children[0].children[0].children[0].innerHTML = "Prestação";
    tabela.children[0].children[0].children[1].innerHTML = "Amortizante";
    tabela.children[0].children[0].children[2].innerHTML = "Juros";
    tabela.children[0].children[0].children[3].innerHTML = "Total";

    for(var i = 1; i <= 5; i++)
    {
        tabela.children[0].children[i].children[0].innerHTML = i;
        tabela.children[0].children[i].children[1].innerHTML = amortizacao.toFixed(2);
        tabela.children[0].children[i].children[2].innerHTML = jurosPrestacoes[i - 1].toFixed(2);
        tabela.children[0].children[i].children[3].innerHTML = (jurosPrestacoes[i - 1] + amortizacao).toFixed(2);
    }
    document.createElement("div");
}