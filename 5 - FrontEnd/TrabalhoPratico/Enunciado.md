Objetivos:
Exercitar os seguintes conceitos trabalhados no Módulo:

✓Documentos HTML.
✓Estilização com CSS.
✓Programação em JavaScript.
✓Reagir a eventos e alterar o DOM.


Enunciado:

Construa, utilizando  HTML,  CSS  e  JavaScript,  uma  página  para  simulação  de  um financiamento com base nos dados fornecidos, exibindo o valor das primeiras prestações, de acordo com o Sistema de Amortizações Constantes(SAC).

Atividades:
Os alunos deverão desempenhar as seguintes atividades:

1. Crie uma  página  com  três  campos de  entrada numéricos: Valor, Prazo(anos) e Juros ao  ano.Tais  campos  devem  estar  inicialmente  preenchidos  com os  valores 200.000, 20 e 0,08, respectivamente.

2. Adicione  um  botão Simular.  Ao  apertar  o  botão,  calcule  e  exiba  na  interface as seguintes informações:

a.Prazo (meses): prazo total do financiamento em meses, ou seja, o valor de Prazo (anos)multiplicado por 12.

b.Juros ao mês: taxa de juros mensal corresponde à taxa anual informada. Tal taxa pode ser calculada com a seguinte fórmula:Onde jmé a taxa mensal, e jaé a taxa anual.

    juros/mes = (1 + juros/ano)^1/12 - 1

c.Juros acumulados: soma de todos os valores pagos de juros, considerando todas as prestações, até o final do financiamento(mais detalhes no item 3).

d.Tabela com o valor das 5 primeiras prestações, indicando ovalor pago como amortização, o valor pago como juros e o total (soma dos dois).


3. O  cálculo  da  parcela  deve  ser  feito  de  acordo  com  o Sistema  de  Amortizações Constantes(SAC). Neste sistema, a parcela é composta de:

a.Amortização: valor total financiado dividido pelo número de prestações. Este valor  é  o  mesmo  em  todas  as prestações.Por  exemplo,  se  foi  financiado 200.000,00 em 240 parcelas, a amortização é 833,33.
b.Juros:  saldo  devedor  multiplicado  pelos  juros  ao  mês.  O  saldo  devedor inicialmente é o valor total, e diminui a cada prestação paga de acordo com o  valor  de  amortização.  Por  exemplo,  ao  calcular  a terceira prestação,  o saldo devedor seria: 200.000,00 – (2 × 833,33).


4. Para  simplificar,  assuma  que  os  campos de  entrada sempre  estarão  preenchidos corretamente. Ou seja, não é obrigatório tratar o caso do valor, prazo ou juros ao ano estarem vazios ou com valores inválidos. 


5. Estilize  a  aplicação  usando CSS da  maneira  que  achar  adequado.  A  única exigência  é utilizar cor  de texto  diferente  para destacar  um  ou  mais  elementos.  A imagem é um exemplo de possível interface, apenas como inspiração:


Dicas:
▪Comece  criando oHTML  adicionando  os  elementos  da  interface.  Depois  adicione comportamento aos poucos, testando a cada etapa.▪Inicie calculando o Juros ao mês. Verifique se ele está sendo calculado certo antes de continuar (veja exemplo no print acima).
▪O  cálculo  do  total  pago  em  juros  dependerá  dovalor  pago  em  juros  em  cada prestação, use uma estrutura de repetição para calculá-lo.
▪Você  pode  criar  todos  os  elementos  no  HTML  e  modificar  suas para  exibir  os resultados,  ou  criar  elementos  dinamicamente  via  JavaScript.  Use  a  abordagem que achar mais adequada.
▪Todo elemento possui a propriedade children, que pode ser acessada como um array  para  obter  os  elementos  filhos.  Por  exemplo, você  pode  obter  a  segunda linha  de  uma  tabela  usando tbody.children[1],  assumindo  que tbody é  uma referência para o elemento tbody.
▪Você pode usar a função meuNumber.toFixed(2) para transformar um numberem uma string com duas casas decimais.