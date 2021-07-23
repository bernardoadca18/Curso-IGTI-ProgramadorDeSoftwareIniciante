const fs = require("fs");
const path = "./employees.json";

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

const employees = [];

for(let i = 0; i < 300; i++)
{
    let employee = 
    {
        id: i,
        name: "",
        role_id: Math.round(Math.random() * 21),
        salario: parseFloat((((Math.round(Math.random() * 29) + 1) * 1000) + Math.random()).toFixed(2))
    };
    if(i < 10)
    {
        employee.name = ("Funcionário00" + i);
    }
    else if(i > 10 && i < 99)
    {
        employee.name = ("Funcionário0" + i);
    }
    else
    {
        employee.name = ("Funcionário" + i);
    }
    employees.push(employee);
}

storeData(employees, path);