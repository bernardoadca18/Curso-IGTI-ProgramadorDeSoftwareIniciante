package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploXVII 
{
	//Programa de operações
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        Scanner scNums = new Scanner(System.in);
        char operacao = ' ';
        int[] numeros = new int[1000];
        int i = 0;
        int somatorio = 0;
        int quantidadePares = 0;
        double media = 0;

        do
        {
            System.out.println( "Menu de opções.\n"                                 + 
                                "D - para digitar novos números.\n"                 + 
                                "Z - para apresentar o total dos números.\n"        + 
                                "V - para visualizar os números digitados.\n"       + 
                                "P - para a quantidade de números digitados.\n"     + 
                                "M - para a média simples dos números digitados.\n" +
                                "Q - para a quantidade de pares.\n"                 +
                                "S - para sair do programa.");
            operacao = sc.nextLine().toUpperCase().charAt(0);

            switch (operacao) {
                case 'D':
                {
                    System.out.println("Digite o número desejado: ");
                    numeros[i] = scNums.nextInt();
                    i++;
                    break;
                }

                case 'Z':
                {
                    for(int j = 0; j < i; j++)
                    {
                        somatorio += numeros[j];
                    }
                    System.out.println("Total dos números: " + somatorio);
                    break;
                }

                case 'V':
                {
                    for(int j = 0; j < i; j++)
                    {
                        System.out.println(numeros[j]);
                    }
                    break;
                }

                case 'P':
                {
                    System.out.println("Foram digitados " + i + " números");
                    break;
                }

                case 'M':
                {
                    for(int j = 0; j < i; j++)
                    {
                        somatorio += numeros[j];
                    }
                    media = somatorio/i;
                    System.out.println("A média é: " + media);
                    break;
                }

                case 'Q':
                {
                    quantidadePares = 0;
                    for(int j = 0; j < i; j++)
                    {
                        if(numeros[j] % 2 == 0)
                        {
                            quantidadePares++;
                        }
                    }
                    System.out.println("A quantidade de pares é: " + quantidadePares);
                    break;
                }

                case 'S':
                {
                    break;
                }

                default:
                {
                    System.out.println("Operação inválida.");
                }
            }

        }
        while (operacao != 'S');

        System.out.println("Fim da execução");

    }
}