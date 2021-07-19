package pacoteExemplo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ClasseExemploXV 
{
	//Lendo Arquivos
    public static void main(String[] args) 
    {
        try
        {
            FileReader arquivo = new FileReader("C:\\Users\\Bernardo\\Desktop\\arquivoDados.txt");
            BufferedReader lerArquivo = new BufferedReader(arquivo);

            String linha;
            linha = lerArquivo.readLine();

            while(linha != null)
            {
                String[] dados = new String[4];
                dados = linha.split(";");
                System.out.printf(
                    "Identificador: %s.\n"  + 
                    "Sobrenome: %s.\n"      +
                    "Nome: %s.\n"           +
                    "Idade: %s.\n"          +
                    "Endereço: %s.\n"       +
                    "Cidade: %s.\n"         + 
                    "Profissão: %s.\n"      + "\n", dados[0], dados[1], dados[2], dados[3], dados[4], dados[5], dados[6]);

                linha = lerArquivo.readLine();
            }

            lerArquivo.close();
            arquivo.close();
        }
        catch(IOException e)
        {
            System.out.println("Erro lendo os dados: \n" + e.getMessage());
        }
    }
}
