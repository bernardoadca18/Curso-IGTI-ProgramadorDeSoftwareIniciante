package pacoteExemplo;

import java.util.Scanner;

public class ClasseExemploVII 
{
	//Operadores e Scanner
    public static void main(String[] args) 
    {
        String nome;
        double nota1;
        double nota2;
        double nota3;
        double nota4;
        double totalNotas;
        double frequencia;
        char status;
        boolean aprovado;

        Scanner entradaNotas = new Scanner(System.in);
        Scanner entradaChar = new Scanner(System.in);

        System.out.print("Enter name: ");
        nome = entradaChar.nextLine();

        System.out.print("Enter a caractere for status (O -> OK; P-> Pendent) : ");
        status = entradaChar.nextLine().charAt(0);

        System.out.print("Enter first grade: ");
        nota1 = entradaNotas.nextDouble();

        System.out.print("Enter second grade: ");
        nota2 = entradaNotas.nextDouble();

        System.out.print("Enter third grade: ");
        nota3 = entradaNotas.nextDouble();

        System.out.print("Enter fourth grade: ");
        nota4 = entradaNotas.nextDouble();

        System.out.println("Type frequence: ");
        frequencia = entradaNotas.nextDouble();

        totalNotas = nota1 + nota2 + nota3 + nota4;
        aprovado = totalNotas >= 70 && frequencia >= 0.75;

        System.out.println("Name: " + nome);
        System.out.println("Status: " + status);
        System.out.println("Total Grade: " + totalNotas);
        System.out.println("Frequence: " + frequencia*100);
        System.out.println("Aprovado: " + aprovado);
    }
}
