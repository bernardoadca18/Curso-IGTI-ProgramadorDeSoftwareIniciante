import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Desafio04 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int[] numeros = new int[50];
        int contador = 0;
        char continuar = 'S';

        while(continuar == 'S' || continuar == 's')
        {
            System.out.println("Digite o " + (contador+1) + "º número: ");
            numeros[contador] = sc.nextInt();
            contador++;
            sc.nextLine();
            System.out.println("Deseja continuar digitando? (S ou N)");
            continuar = sc.nextLine().charAt(0);
        }

        try 
        {
            FileWriter fw = new FileWriter("C:\\Users\\Bernardo\\Desktop\\saida3.txt");
            PrintWriter pw = new PrintWriter(fw);
            for(int i = 0; i < contador; i++)
            {
                //if(numeros[i] % 2 == 0 && numeros[i] > 10)
                //{
                    pw.println(numeros[i]);
                //}
            }
            fw.close();
            pw.close();
            System.out.println("Programa finalizado");
        } 
        catch (IOException e) 
        {
            System.out.println("Deu Ruim fi: " + e.getMessage());
        }
    }
}
