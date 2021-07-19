package pacoteExemplo;

import java.math.*;

public class ClasseExemploVI 
{
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

        nome = "Nome Exemplo";
        status = 'M';

        nota1 = 20;
        nota2 = 20;
        nota3 = 10;
        nota4 = 25;

        frequencia = 0.85;
        totalNotas = nota1 + nota2 + nota3 + nota4;

        aprovado = ((totalNotas >= 70) && (frequencia >= 0.75));
        
        System.out.println("O(a) aluno(a) " + nome + " obteve nota final " + totalNotas + " e frequência de " + frequencia*100 + "% " + "a situação do(a) aluno(a) é " + status + "\n" + "Aluno aprovado ? " + aprovado);
    }
}
