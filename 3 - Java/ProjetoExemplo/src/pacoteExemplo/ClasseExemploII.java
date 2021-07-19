package pacoteExemplo;

public class ClasseExemploII 
{
    public static void main(String[] args) 
    {
		//Printf
        int idade = 18;
        double altura = 1.81;
        String nome = "Nome Exemplo";
        boolean homem = false;
        char tipoSanguineo = 'O';
        
        //System.out.println("Idade: " + idade);
        //System.out.println("Altura: " + altura);

        // %s String
        // %d Int
        // %.2f Float ou Double com 2 casas
        // %b Boolean
        // %c Char

        System.out.printf("A idade é %d e a altura é %.2f.\nO nome é %s.\nO tipo sangíneo é %c.\nSabe voar estudante? %b", idade, altura, nome, tipoSanguineo, sabeVoarEstudante);
    }
}
