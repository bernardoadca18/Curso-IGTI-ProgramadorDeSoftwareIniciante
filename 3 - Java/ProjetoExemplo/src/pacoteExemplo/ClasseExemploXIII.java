package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploXIII 
{
	//Manipulação de arrays
    public static void main(String[] args) 
    {
        //tipo[] nome = new tipo[tamanho]
        int[] numeros = new int[3];
        int total = 0;
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < numeros.length; i++)
        {
            System.out.println("Digite o " + (i + 1) + "º número: ");
            numeros[i] = sc.nextInt();
            total += numeros[i];
            System.out.println("Total parcial: " + total);
        }

        //System.out.println("Digite o primeiro número: ");
        //numeros[0] = sc.nextInt();
        //System.out.println("Digite o segundo número: ");
        //numeros[1] = sc.nextInt();
        //System.out.println("Digite o terceiro número: ");
        //numeros[2] = sc.nextInt();
        //System.out.println("Digite o quarto número: ");
        //numeros[3] = sc.nextInt();
        //System.out.println("Digite o quinto número: ");
        //numeros[4] = sc.nextInt();
        //numeros[0] = 10;
        //numeros[1] = 15;
        //numeros[2] = 13;
        //numeros[3] = 1;
        //numeros[4] = 7;
        //total = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
        System.out.println("O valor total é: " + total);
    }
}
