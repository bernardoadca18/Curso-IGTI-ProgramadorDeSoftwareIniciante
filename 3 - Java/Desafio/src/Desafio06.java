import java.util.Random;
import java.util.Scanner;

public class Desafio06 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int[] valores = new int[1000];
        int[] repetições = new int[1000];
        int limiteSuperior = 100;
        Random rand = new Random();

        for (int i = 0; i < 1000; i++) 
        {
            valores[i] = rand.nextInt(limiteSuperior);
        }

        for (int i = 0; i < 1000; i++) 
        {
            repetições[valores[i]]++;
            /*
            O loop percorre de 1 ate 1000 
            Cada iteração do array repetições percorre pelos elementos i do array valores
            Toda vez que percorre por um número especifico, ele incrementa a sua posicao em 1
            */
        }

        for(int i = 0; i < 100; i++)
        {
            System.out.println("O numero " + (i+1) + " se repete " + repetições[i] + " vezes.");
        }
    }
}
