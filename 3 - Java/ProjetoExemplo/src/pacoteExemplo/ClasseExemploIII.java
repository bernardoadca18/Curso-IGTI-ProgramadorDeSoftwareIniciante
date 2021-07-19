package pacoteExemplo;

import java.math.*;

public class ClasseExemploIII 
{
	//Operações
    public static void main(String[] args) 
    {
        // x^2 + 12x - 13 = 0
        // 2x^2 + 16x - 18 = 0;

        double a;
        double b;
        double c;
        //a = 1;
        //b = 12;
        //c = -13;

        a = 2;
        b = -16;
        c = -18;

        double delta = 0;

        delta = (b * b) - 4 * (a * c);
        System.out.printf("O delta é: %.0f\n", delta);

        double x_linha = (-b + Math.sqrt(delta))/(2*a);
        double x_linha2 = (-b - Math.sqrt(delta))/(2*a);

        System.out.printf("O valor de x' é: %.0f\n", x_linha);
        System.out.printf("O valor de x'' é: %.0f\n", x_linha2);

        System.out.println(Math.getExponent(delta));
        System.out.println(Math.getExponent(200));
        System.out.println(Math.getExponent(49));
        System.out.println(Math.getExponent(9));
    }
}
