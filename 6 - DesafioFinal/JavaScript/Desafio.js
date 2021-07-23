const lines = "================================================";
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require("fs");

const storeData = (data, path) => 
{
    try 
    {
        fs.writeFileSync(path, JSON.stringify(data));
    } 
    catch (error) 
    {
        console.log(error);
    }
}

function getInss(salary)
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
    return parseFloat(discount.toFixed(2));
}

function getIrrf(salary)
{
    let tempSalary = salary - getInss(salary);
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

    return parseFloat(discount.toFixed(2));
}

function getLiquidSalary(salary)
{
    return salary - getInss(salary) - getIrrf(salary);
}

let entrada;
let funcionarios = [];

function main()
{
    entrada = undefined;
    console.log(lines);
    console.log("1 - Cadastrar funcionário.");
    console.log("2 - Imprimir contracheque de um funcionário específico.");
    console.log("3 - Imprimir lista de funcionários e o índice de cada um.");
    console.log("4 - Salvar a lista de funcionários em um arquivo JSON.");
    console.log("0 - Sair.");
    console.log(lines);

    readline.question("O que deseja fazer ?\n", resp =>
    {
        entrada = resp;

        if(entrada == 1)
        {
            let name;
            let salary;
            readline.question("Insira o nome do funcionário: ", resp =>
            {
                name = resp;
                readline.question("Insira o salário do funcionário: ", resp =>
                {
                    salary = resp;
                    signEmployee(name, salary);
                    main();
                });
            });
        }
        else if(entrada == 2)
        {
            let index;
            readline.question("Insira o índice do funcionário: ", resp =>
            {
                index = resp;
                showEmployee(index);
                main();
            });
        }
        else if(entrada == 3)
        {
            showEmployees();
            main();
        }
        else if(entrada == 4)
        {
            storeData(funcionarios, "./funcionarios.json");
            main();
        }
        else if(entrada == 0)
        {
            readline.close();
        }
        else
        {
            main();
        }
    });
}

function signEmployee(name, salary)
{
    funcionario = 
    {
        Nome: name,
        SalarioBruto: parseFloat(salary),
        INSS: getInss(salary),
        IRRF: getIrrf(salary),
        TotalDescontos: getInss(salary) + getIrrf(salary),
        SalarioLiquido: getLiquidSalary(salary)
    };
    funcionarios.push(funcionario);
}

function showEmployee(index)
{
    console.log(lines);
    console.log(funcionarios[index]);
    console.log(lines);
}

function showEmployees()
{
    console.log(lines);
    for(let i = 0; i < funcionarios.length; i++)
    {
        console.log("Funcionário: " + funcionarios[i].Nome);
        console.log("Índice: " + i);
    }
    console.log(lines);
}

main();