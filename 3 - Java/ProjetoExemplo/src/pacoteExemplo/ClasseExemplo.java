package pacoteExemplo;

public class ClasseExemplo 
{
    public static void main(String[] args) 
    {
		//Variáveis
        String nome;
        String nome2;
        nome = "Nome";
        nome2 = "Nome2";
        System.out.println(nome);
        System.out.println(nome2);

        int tamanhoDoNome = nome.length();
        int tamanhoDoNome2 = nome2.length();
        int totalCaracteres = tamanhoDoNome + tamanhoDoNome2;
        System.out.println("A variável nome tem: " + tamanhoDoNome + " caracteres");
        System.out.println("A variável nome2 tem: " + tamanhoDoNome2 + " caracteres");
        System.out.println("No total, as variaveis tem: " + totalCaracteres + " caracteres");

        String nomes = nome.concat(nome2);
        System.out.println(nomes);

        String nomeSemA = nome.replace('a', '9');
        System.out.println(nomeSemA);

        String somenteNome = nome.substring(0, 9);
        System.out.println(somenteNome);

        String nomeMaiusculo = nome.toUpperCase();
        System.out.println(nomeMaiusculo);

        String nomeMinusculo = nome2.toLowerCase();
        System.out.println(nomeMinusculo);
    }
}