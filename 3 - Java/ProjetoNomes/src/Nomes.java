import java.util.Scanner;

public class Nomes 
{
    public static void main(String[] args) 
    {
        System.out.println("Type a name: ");
        Scanner sc = new Scanner(System.in);
        String nome = sc.nextLine();
        System.out.println(nome);
        char[] firstName = new char[nome.length()];

        for(int i = 0; i < nome.length(); i++)
        {
            if(nome.charAt(i) == ' ')
            {
                break;
            }
            firstName[i] += nome.charAt(i);
        }

        System.out.println(firstName);
    }
}
