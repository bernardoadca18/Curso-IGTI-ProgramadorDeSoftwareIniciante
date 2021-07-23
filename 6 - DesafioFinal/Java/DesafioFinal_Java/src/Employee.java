public class Employee
{
    private String name;
    private float salary;

    public Employee(String name, float salary)
    {
        this.name = name;
        this.salary = salary;
    }

    public String getName()
    {
        return this.name;
    }

    private float getInssDiscount()
    {
        float tempSalary = this.salary;
        float discount;

        if(tempSalary <= 1100f)
        {
            discount = tempSalary * 0.075f;
        }
        else if(tempSalary > 1100f && tempSalary <= 2203.48f)
        {
            discount = (1100f * 0.075f) + ((tempSalary - 1100.01f) * 0.09f);
        }
        else if(tempSalary > 2203.48f && tempSalary <= 3305.22f)
        {
            discount = (1100f * 0.075f) + ((2203.48f - 1100.01f) * 0.09f) + ((tempSalary - 2203.49f) * 0.12f);
        }
        else if(tempSalary > 3305.22f && tempSalary <= 6433.57f)
        {
            discount = (1100f * 0.075f) + ((2203.48f - 1100.01f) * 0.09f) + ((3305.22f - 2203.49f) * 0.12f) + ((tempSalary - 3305.23f) * 0.14f);
        }
        else
        {
            discount = 751.99f;
        }

        return Math.round(discount * 100.0f)/100.0f;
    }

    private float getIrrfDIscount()
    {
        float tempSalary = salary - getInssDiscount();
        float discount;

        if(tempSalary <= 1903.98f)
        {
            discount = 0f;
        }
        else if(tempSalary > 1903.98f && tempSalary <= 2826.65f)
        {
            discount = (tempSalary * 0.075f) - 142.80f;
        }
        else if(tempSalary > 2826.65f && tempSalary <= 3751.05f)
        {
            discount = (tempSalary * 0.15f) - 354.80f;
        }
        else if(tempSalary > 3751.05f && tempSalary <= 4664.68f)
        {
            discount = (tempSalary * 0.225f) - 636.13f;
        }
        else
        {
            discount = (tempSalary * 0.275f) - 869.36f;
        }

        return Math.round(discount * 100.0f)/100.0f;
    }

    private float getLiquidSalary()
    {
        return salary - getInssDiscount() - getIrrfDIscount();
    }

    public String getCounterCheck()
    {
        return  "================================================" + '\n' +
                "Funcionário: " + this.name + '\n' +
                "Salário Bruto: " + this.salary + '\n' +
                "Desconto INSS: " + this.getInssDiscount() + '\n' +
                "Desconto IRRF: " + this.getIrrfDIscount() + '\n' +
                "Salário Líquido: " + this.getLiquidSalary() + '\n' +
                "================================================\n";
    }
}