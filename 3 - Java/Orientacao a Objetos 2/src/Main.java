public class Main 
{
    public static void main(String[] args) 
    {
        Carro c1 = new Carro();

        c1.setNPortas(4);
        c1.setMarca("Fiat");
        c1.setModelo("Monza");
        c1.setNCavalos(85);
        System.out.println( "Portas: " + c1.getNPortas() +
                            "\nMarca: " + c1.getMarca() +
                            "\nModelo: " + c1.getModelo() +
                            "\nCavalos: " + c1.getNCavalos());
    }
}
