package mainPackage;

public class Pessoa 
{
    int idade;
    double altura;
    double peso;
    String nome;
    String CPF;
    DadosEndereco endereco;

    Pessoa()
    {
        endereco = new DadosEndereco();
    }

    Pessoa(String nome, int idade, double altura, double peso, String CPF)
    {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.CPF = CPF;
        endereco = new DadosEndereco();
    }

    Pessoa(String nome, int idade, double altura, double peso, String CPF, String logradouro, int numero, String complemento, String cidade, String estado, String CEP)
    {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.CPF = CPF;

        endereco = new DadosEndereco();
        endereco.logradouro = logradouro;
        endereco.numero = numero;
        endereco.complemento = complemento;
        endereco.cidade = cidade;
        endereco.estado = estado;
        endereco.CEP = CEP;
    }

    public String printData(char imprimirEndereco)
    {
        if(imprimirEndereco == 'n' || imprimirEndereco == 'N')
        {
            return  "Nome: " + nome + 
                    "\nIdade: " + Integer.toString(idade) +
                    "\nPeso: " + Double.toString(peso) +
                    "\nAltura: " + Double.toString(altura) +
                    "\nCPF: " + CPF;
        }
        else
        {
            return  "Nome: " + nome + 
                    "\nIdade: " + Integer.toString(idade) +
                    "\nPeso: " + Double.toString(peso) +
                    "\nAltura: " + Double.toString(altura) +
                    "\nCPF: " + CPF + "\n" +
                    endereco.printAddressData();
        }
    }

    public int returnBirthYear()
    {
        return 2021 - idade;
    }
}
