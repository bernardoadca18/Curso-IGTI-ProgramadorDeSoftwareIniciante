package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploXI 
{
	//While loop
    public static void main(String[] args) 
    {
        char saida = 'N';
        Scanner sc = new Scanner(System.in);
        int numero = 0;
        int soma = 0;
        int contaNumeros = 0;

        while(saida != 'S')
        {
            System.out.println("Digite um número: ");
            numero = sc.nextInt();
            sc.nextLine();
            System.out.println("Gostaria de sair (S - Sim. N - Não)?");
            saida = sc.nextLine().toUpperCase().charAt(0);
            soma += numero;
            contaNumeros++;
        }
        System.out.println("Saiu");
        System.out.println("Somatório: " + soma);
        System.out.println("Números digitados: " + contaNumeros);
    }
}
