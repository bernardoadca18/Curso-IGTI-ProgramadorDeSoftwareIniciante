package pacoteExemplo;

public class ClasseExemploX 
{
	//For loop
    public static void main(String[] args) 
    {
        //for(inicialização, condição, incremento)
        int i = 0;
        int j = 0;

        System.out.println("Tabuada");
        for(i = 0; i <= 20; i++)
        {
            System.out.println("Tabuada do " + i + ".");
            for(j = 0; j <= 20; j++)
            {
                System.out.println(i + " * " + j + " = " + i*j);
            }
        }
    }
}
