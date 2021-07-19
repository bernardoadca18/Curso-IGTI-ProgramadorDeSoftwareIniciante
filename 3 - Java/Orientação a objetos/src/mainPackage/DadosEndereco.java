package mainPackage;

public class DadosEndereco
{
    String logradouro;
    int numero;
    String complemento;
    String cidade;
    String estado;
    String CEP;

    String printAddressData()
    {
        return  "Rua: " + logradouro +
                "\nNúmero: " + Integer.toString(numero) +
                "\nComplemento: " + complemento +
                "\nCidade: " + cidade +
                "\nEstado: " + estado +
                "\nCEP: " + CEP;
    }
}
