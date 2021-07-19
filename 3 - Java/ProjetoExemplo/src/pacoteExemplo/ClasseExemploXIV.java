package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploXIV 
{
	//Operadores dentro do loop
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int numero = 0;
        int soma = 0;
        int contador = 0;

        do
        {
            System.out.println("Digite os numeros positivos ou 0 (Zero) para sair: ");
            numero = sc.nextInt();

            if(numero == 18)
            {
                continue;
            }
            soma += numero;
        }
        while(numero > 0);

//        System.out.println("Digite o numero desejado: ");
//        numero = sc.nextInt();
//        while(numero > 0)
//        {
//            soma += numero;
//            System.out.println("Digite o numero desejado: ");
//            numero = sc.nextInt();
//            if(numero == 18)
//            {
//                break;
//            }
//        }
    System.out.println("Soma: " + soma);
    }
}
