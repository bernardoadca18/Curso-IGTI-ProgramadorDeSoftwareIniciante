package mainPackage;

import java.util.*;

public class Main 
{
    public static void main(String[] args) 
    {
        Scanner scNum = new Scanner(System.in);
        Scanner sc = new Scanner(System.in);
        Pessoa p1 = new Pessoa();
        char imprimirEndereco;
        
        System.out.println("Digite o nome: ");
        p1.nome = sc.nextLine();

        System.out.println("Digite a idade: ");
        p1.idade = scNum.nextInt();

        System.out.println("Digite o peso: ");
        p1.peso = scNum.nextDouble();

        System.out.println("Digite a altura: ");
        p1.altura = scNum.nextDouble();

        System.out.println("Digite o CPF: ");
        p1.CPF = sc.nextLine();

        System.out.println("Digite a rua: ");
        p1.endereco.logradouro = sc.nextLine();

        System.out.println("Digite o número: ");
        p1.endereco.numero = scNum.nextInt();

        System.out.println("Digite o complemento: ");
        p1.endereco.complemento = sc.nextLine();

        System.out.println("Digite a Cidade: ");
        p1.endereco.cidade = sc.nextLine();

        System.out.println("Digite o Estado: ");
        p1.endereco.estado = sc.nextLine();

        System.out.println("Digite o CEP: ");
        p1.endereco.CEP = sc.nextLine();

        System.out.println("Deseja imprimir o endereço (S - Sim, N - Não) ?");
        imprimirEndereco = sc.nextLine().toUpperCase().charAt(0);

        System.out.println(p1.printData(imprimirEndereco));

        Pessoa p2 = new Pessoa("Nome", 25, 1.80, 67.5, "333.333.333-33");
        DadosEndereco p2E = p2.endereco;
        p2E.logradouro = "Rua A";
        p2E.numero = 0;
        p2E.complemento = "Casa A";
        p2E.cidade = "Cidade";
        p2E.estado = "Estado";
        p2E.CEP = "33333-333";
        System.out.println(p2.printData('S'));

        Pessoa p3 = new Pessoa("nome", 10, 1, 100, "10000000-00", "logradouro", 5000, "complemento", "cidade", "estado", "CEP");
        System.out.println(p3.printData('s'));
    }
}
