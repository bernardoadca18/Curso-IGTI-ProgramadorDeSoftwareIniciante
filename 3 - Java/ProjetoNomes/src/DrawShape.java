import java.util.ArrayList;
import java.util.List;

public class DrawShape 
{
    public static void main(String[] args) 
    {
        //List<Character> shape = new ArrayList<Character>();
        String shape = "";
        for(int i = 0; i < 100; i++)
        {
            //shape.add(i, '#');
            shape += "#";
            System.out.println(shape);
        }
    }
}
