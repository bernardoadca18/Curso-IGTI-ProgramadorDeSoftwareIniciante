import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main 
{
    private static List<Employee> employees = new ArrayList<Employee>();
    public static void main(String[] args) 
    {
        int entrada = 0;
        Scanner scInts = new Scanner(System.in);
        Scanner scStrings = new Scanner(System.in);

        do
        {
            System.out.println("================================================");
            System.out.println("O que deseja fazer ?");
            System.out.println("1 - Cadastrar funcionário.");
            System.out.println("2 - Imprimir contracheque de um funcionário específico.");
            System.out.println("3 - Imprimir lista de funcionários e o índice de cada um.");
            System.out.println("0 - Sair.");
            System.out.println("================================================");

            entrada = scInts.nextInt();

            if(entrada == 1)
            {
                String tempName;
                float tempSalary;
                System.out.print("Insira o nome do funcionário: ");
                tempName = scStrings.nextLine();
                System.out.print("Insira o salário bruto do funcionário: ");
                tempSalary = scInts.nextFloat();
                Employee e = new Employee(tempName, tempSalary);
                employees.add(e);
            }
            else if(entrada == 2)
            {
                int index;
                System.out.print("Insira o índice do funcionário (Começando no 0): ");
                index = scInts.nextInt();
                System.out.println(employees.get(index).getCounterCheck());
            }
            else if(entrada == 3)
            {
                System.out.println("================================================");
                for(int i = 0; i < employees.size(); i++)
                {
                    System.out.println("Index: " + i);
                    System.out.println("Employee: " + employees.get(i).getName());
                }
                System.out.println("================================================");
            }
        }
        while(entrada != 0);

        try 
        {
            FileWriter arquivo = new FileWriter("Funcionarios.txt");
            PrintWriter gravarArquivo = new PrintWriter(arquivo);

            for(int i = 0; i < employees.size(); i++)
            {
                gravarArquivo.println(employees.get(i).getCounterCheck());
            }
            
            gravarArquivo.close();
            arquivo.close();
        } 
        catch (IOException e) 
        {
            System.out.println("Ocorreu um erro");
            e.printStackTrace();
        }

        scInts.close();
        scStrings.close();
    }
}
