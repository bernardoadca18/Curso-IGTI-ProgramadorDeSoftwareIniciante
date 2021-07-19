package pacoteExemplo;

import java.math.*;
import java.util.*;

public class ClasseExemploVIII
{
	//If/Else if/Else
    public static void main(String[] args) 
    {
        double n1, n2, n3, total, mediaAvaliacoes, frequencia;
        String situacao;
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a primeira nota: ");
        n1 = sc.nextDouble();

        System.out.println("Digite a segunda nota: ");
        n2 = sc.nextDouble();

        System.out.println("Digite a terceira nota: ");
        n3 = sc.nextDouble();

        System.out.println("Digite a frequência do aluno: ");
        frequencia = sc.nextDouble();

        total = n1 + n2 + n3;
        mediaAvaliacoes = total/3;

        if(total >= 70 && frequencia >= 0.75)
        {
            if(total >= 90)
            {
                situacao = "Aprovado com conceito A";
            }
            else if(total >= 80 && total < 90)
            {
                situacao = "Aprovado com conceito B";
            }
            else
            {
                situacao = "Aprovado com conceito C";
            }
        }
        else if(total >= 40 && total < 70 && frequencia >= 0.75)
        {
            situacao = "em Recuperação";
        }
        else
        {
            situacao = "Reprovado";
        }

        System.out.println("O aluno teve nota total " + total + " e média de " + mediaAvaliacoes + ". A frequência foi de " + frequencia*100 + "%. Com isso, o aluno está " + situacao);
    }
}