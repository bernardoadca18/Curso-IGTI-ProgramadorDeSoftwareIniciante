package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploIX 
{
	//Calculadora
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        char operacao = ' ';
        double n1 = 0;
        double n2 = 0;
        double total = 0;

        System.out.println("Digite o valor do primeiro número: ");
        n1 = sc.nextInt();

        System.out.println("Digite o valor do segundo número: ");
        n2 = sc.nextInt();

        sc.nextLine();

        System.out.println("Digite a operação desejada (+,-,*,/,%): ");
        operacao = sc.nextLine().charAt(0);

        switch(operacao)
        {
            case '+':
            {
                total = n1 + n2;
                break;
            }
            case '-':
            {
                total = n1 - n2;
                break;
            }
            case '*':
            {
                total = n1 * n2;
                break;
            }
            case '/':
            {
                total = n1 / n2;
                break;
            }
            case '%':
            {
                total = n1 % n2;
                break;
            }
            default:
            {
                System.out.println("Operação desconhecida");
            }
        }

        System.out.println(total);

    }
    
}
