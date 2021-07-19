public class Desafio 
{
    public static void main(String[] args) 
    {
        int contador = 0;
        int n = 37;

        for (int i = n; i > 0; i--) 
        {
            System.out.println(i);
            if(i % 3 == 0)
            {
                contador++;
            }
        }

        System.out.println(contador);
    }
}
