import java.util.Scanner;

public class Desafio01 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int n = 30;
        int[] valores = new int[3];

        System.out.println("Digite um valor para n: ");
        n = sc.nextInt();

        while(n >= -1)
        {
            if(n >= 0 && n <= 10)
            {
                valores[0] += 1;
            }
            else if(n >= 11 && n <= 20)
            {
                valores[1] += 1;
            }
            else
            {
                valores[2]++;
            }
        }

        for(int i = 0; i < valores.length; i++)
        {
            System.out.println(valores[i]);
        }
    }
}
