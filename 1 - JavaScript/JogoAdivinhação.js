var readline = require('readline');
/*
    Criar um jogo no qual o jogador tenha que adivinhar um número.
    O jogo deve gerar um número aleatório entre 1 e 100,
    e depois desafiar o jogador a descobrir o número em no máximo 10 (dez)
    tentativas. A cada tentativa, caso o jogador não tenha acertado o número,
    o jogo deve informar se o número informado é maior ou menor que o sorteado.
    O jogo termina se o jogador acertar o número ou acabarem o número de tentativas.

    1) Gerar um número aleatório entre 1 e 100
    2) Inicializar o número de tentativas como 10
    3) Pedir o jogador pra tentar adivinhar o número de
    4) Decrementar o número de tentativas
    5) Verificar se a tentativa está correta
    6) Se estiver correta:
        Informar que acertou o numero
        Encerrar o jogo
    7) Se estiver incorreta, e acabaram as tentativas:
        Informar que o jogo acabou
    8) Se estiver incorreta, mas não acabaram as tentativas:
        Informar que está incorreta e se o número digitado é maior ou menor que o sorteado
*/
var rl = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
)

var num = Math.round(Math.random() * 100);
if(num === 0) 
{
    num = 1;
}

var tries = 10;

pergunta();

function pergunta()
{
    rl.question("Digite um número: ", 
    function(numero)
    {
        numero = parseInt(numero);
        tries--;
        
        if(numero === num)
        {
            console.log("Você acertou o número em " + (10 - tries) + " tentativas.");
            rl.close();
        }
        else if(tries === 0)
        {
            console.log("Perdeste, suas tentavas acabaram");
            rl.close();
        }
        else if(numero > num)
        {
            console.log("Número errado, você ainda tem " + tries + " tentativas.\nO número inserido é maior que o sorteado");
            pergunta();
        }
        else if(numero < num)
        {
            console.log("Número errado, você ainda tem " + tries + " tentativas.\nO número inserido é menor que o sorteado");
            pergunta();
        }
        }
    )
}