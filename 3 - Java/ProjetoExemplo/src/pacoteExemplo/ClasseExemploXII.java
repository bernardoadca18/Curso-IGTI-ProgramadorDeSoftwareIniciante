package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploXII 
{
	//Do-While
    public static void main(String[] args) 
    {
        char continuar = ' ';
        Scanner sc = new Scanner(System.in);

        System.out.println("Deseja continuar? (S = Sim. N - Não)");
        continuar = sc.nextLine().toUpperCase().charAt(0);

        //while(continuar != 'N')
        //{
        //    System.out.println("Mensagem");
        //    System.out.println("Deseja continuar? (S = Sim. N - Não)");
        //    continuar = sc.nextLine().toUpperCase().charAt(0);
        //}

        do
        {
            System.out.println("Mensagem");
            System.out.println("Deseja continuar? (S = Sim. N - Não)");
            continuar = sc.nextLine().toUpperCase().charAt(0);
        }
        while(continuar != 'N');
    }
}
