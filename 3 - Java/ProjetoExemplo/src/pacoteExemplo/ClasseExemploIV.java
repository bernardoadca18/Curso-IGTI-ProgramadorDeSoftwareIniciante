package pacoteExemplo;

public class ClasseExemploIV 
{
	//Operadores lógicos
    public static void main(String[] args) 
    {
        boolean ultimos3EmprestimosQuitadosNoPrazo;
        boolean possuiRendaComprovada;
        boolean cliente10Estrelas;
        boolean restricaoDeCredito;

        ultimos3EmprestimosQuitadosNoPrazo = true;
        possuiRendaComprovada = true;
        cliente10Estrelas = true;
        restricaoDeCredito = false;

        boolean concederEmprestimo = ((ultimos3EmprestimosQuitadosNoPrazo && possuiRendaComprovada) || (cliente10Estrelas)) && (!restricaoDeCredito);
        System.out.println("Empréstimo concedido?\n" + concederEmprestimo);
    }
}
