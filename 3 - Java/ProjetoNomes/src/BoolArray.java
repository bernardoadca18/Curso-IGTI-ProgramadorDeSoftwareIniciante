public class BoolArray 
{
    public static void main(String[] args) 
    {
        boolean[] bools = new boolean[5];
        bools[0] = true;
        bools[1] = true;
        bools[2] = false;
        bools[3] = true;
        bools[4] = false;
        int trueBools = 0;

        for(int i = 0; i < bools.length; i++)
        {
            if(bools[i])
            {
                trueBools++;
            }
        }

        System.out.println(trueBools);
    }
}
