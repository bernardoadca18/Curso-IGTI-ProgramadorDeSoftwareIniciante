package pacoteExemplo;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class ClasseExemploXVI 
{
	//Escrevendo arquivos
    public static void main(String[] args) 
    {
        try 
        {
            FileWriter arquivo = new FileWriter("C:\\Users\\Bernardo\\Desktop\\saidaDados.txt");
            PrintWriter gravarArquivo = new PrintWriter(arquivo);

            for (int i = 0; i < 1000; i++) 
            {
                gravarArquivo.println("Valor de i: " + i);
            }
            gravarArquivo.close();
            arquivo.close();
        }
        catch (IOException e) 
        {
            System.out.println("Erro gravando os dados: \n" + e.getMessage());
        }
        System.out.println("Fim de execução");
    }
}
