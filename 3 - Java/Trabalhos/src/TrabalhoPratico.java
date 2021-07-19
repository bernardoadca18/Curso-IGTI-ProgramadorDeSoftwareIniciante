import java.util.Scanner;

public class TrabalhoPratico 
{
    public static void main(String[] args) 
    {
        //program01();
        //program02();
        program03();
    }

    private static void program01()
    {
        Scanner sc = new Scanner(System.in);
        double n1 = 0;
        double n2 = 0;
        double n3 = 2;
        double resultado;

        System.out.println("Digite o valor de n1: ");
        n1 = sc.nextDouble();

        System.out.println("Digite o valor de n2: ");
        n2 = sc.nextDouble();

        resultado = n1 * n2 % n3;
        System.out.printf("O valor total é: %.2f", resultado);
    }

    private static void program02()
    {
        int valor1 = 0;
        int valor2 = 75;
        int valor3 = 0;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o valor 1: ");
        valor1 = sc.nextInt();
        valor2 += valor1;

        if(valor1 % 2 == 0)
        {
            valor3 = valor1 * 5;
            System.out.println("Debug IF");
        }
        else if(valor1 % 3 == 0)
        {
            valor3 = valor2 * 9;
            System.out.println("Debug ELSE IF");
        }
        else
        {
            valor3 = valor2;
            System.out.println("Debug ELSE");
        }

        System.out.printf("O valor de valor3 é: %d", valor3);
    }

    private static void program03()
    {
        Scanner sc = new Scanner(System.in);
        double nota1 = 0;
        double nota2 = 0;
        double nota3 = 0;
        double notaTotal = 0;
        double frequencia = 0;
        double notaCorte = 50;
        double frequenciaCorte = 60;

        System.out.println("Digite a primeira nota: ");
        nota1 = sc.nextDouble();
        System.out.println("Digite a segunda nota: ");
        nota2 = sc.nextDouble();
        System.out.println("Digite a terceira nota: ");
        nota3 = sc.nextDouble();
        System.out.println("Digite a frequência: ");
        frequencia = sc.nextDouble();

        notaTotal = nota1 + nota2 + nota3;

        if((notaTotal >= notaCorte) && (frequencia >= frequenciaCorte))
        {
            System.out.println("Aprovado.");
        }
        else if((notaTotal >= (notaCorte - notaCorte * 0.20)) && (frequencia >= frequenciaCorte))
        {
            System.out.println("Prova Especial");
        }
        else if(notaTotal >= 80)
        {
            System.out.println("Aprovado direto");
        }
        else
        {
            System.out.println("Reprovado");
        }
    }
}
