function getInssDiscount(salary)
{
    let tempSalary = salary;
    let discount;
    if(tempSalary <= 1100)
    {
        discount = tempSalary * 0.075;
    }
    else if(tempSalary > 1100 && tempSalary <= 2203.48)
    {
        discount = (1100 * 0.075) + ((tempSalary - 1100.01) * 0.09);
    }
    else if(tempSalary > 2203.48 && tempSalary <= 3305.22)
    {
        discount = (1100 * 0.075) + ((2203.48 - 1100.01) * 0.09) + ((tempSalary - 2203.49) * 0.12);
    }
    else if(tempSalary > 3305.22 && tempSalary <= 6433.57)
    {
        discount = (1100 * 0.075) + ((2203.48 - 1100.01) * 0.09) + ((3305.22 - 2203.49) * 0.12) + ((tempSalary - 3305.23) * 0.14);
    }
    else
    {
        discount = 751.99;
    }

    return discount;
}

function getIrrfDiscount(salary)
{
    let tempSalary = salary;
    let discount;

    if(tempSalary <= 1903.98)
    {
        discount = 0;
    }
    else if(tempSalary > 1903.98 && tempSalary <= 2826.65)
    {
        discount = (tempSalary * 0.075) - 142.80;
    }
    else if(tempSalary > 2826.65 && tempSalary <= 3751.05)
    {
        discount = (tempSalary * 0.15) - 354.80;
    }
    else if(tempSalary > 3751.05 && tempSalary <= 4664.68)
    {
        discount = (tempSalary * 0.225) - 636.13;
    }
    else
    {
        discount = (tempSalary * 0.275) - 869.36;
    }

    return discount;
}