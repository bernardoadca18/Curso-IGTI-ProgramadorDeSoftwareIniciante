const bodyDiv = document.getElementById("bodyDiv");
const optionsDiv = document.getElementById("optionsDiv");
const employeesDiv = document.getElementById("employeesDiv");
const sort = document.getElementById("sort");
const filter = document.getElementById("filter");
const employeesTitle = document.getElementById("employeesTitle");
const tableBody = document.getElementById("tBody");
const bCancel = document.getElementById("bCancel");
const bDelete = document.getElementById("bDelete");
const bSubmit = document.getElementById("bSubmit");
const form = document.querySelector("form");

let allEmployees = [];
let employees = [];
let roles = [];
let filters = [];

let selectedItem;

async function init()
{
    [employees, roles] = await Promise.all([getEmployees(), getRoles()]);
    allEmployees = employees;
    createFilters();
    renderRoles();
    clearSelection();
    renderData(employees);
    bCancel.addEventListener("click", clearSelection);
    bDelete.addEventListener("click", onDelete);
    bSubmit.addEventListener("click", onSubmit);
}

function renderData(sortedEmployees)
{
    tableBody.innerHTML = "";
    for(const employee of sortedEmployees)
    {
        let id = employee.id;
        let name = employee.name;
        let role = roles.find((role) => role.id == employee.role_id).name;
        let bruteSalary = employee.salario;
        let inssDiscount = getInssDiscount(bruteSalary);
        let irrfDiscount = getIrrfDiscount(bruteSalary - inssDiscount);
        let liquidSalary = bruteSalary - inssDiscount - irrfDiscount;
        
        let row = document.createElement("tr");
        let tId = document.createElement("td");
        let tName = document.createElement("td");
        let tRole = document.createElement("td");
        let tBruteSalary = document.createElement("td");
        let tInssDiscount = document.createElement("td");
        let tIrrfDiscount = document.createElement("td");
        let tLiquidSalary = document.createElement("td");
        
        tId.innerHTML = id;
        tName.innerHTML = name;
        tRole.innerHTML = role
        tBruteSalary.innerHTML = "R$ " + bruteSalary;
        tInssDiscount.innerHTML = "R$ " + inssDiscount.toFixed(2);
        tIrrfDiscount.innerHTML = "R$ " + irrfDiscount.toFixed(2);
        tLiquidSalary.innerHTML = "R$ " + liquidSalary.toFixed(2);
        
        row.append(tId, tName, tRole, tBruteSalary, tInssDiscount, tIrrfDiscount, tLiquidSalary);
        row.addEventListener("click", () => selectItem(employee, row));
        tableBody.append(row);
        employeesTitle.innerHTML = "Funcionários (" + employees.length + ")";
    }
}

function renderRoles()
{
    for(const role of roles)
    {
        const option = document.createElement("option");
        option.textContent = role.name;
        option.value = role.id;
        form.role_id.append(option);
    }
}

function selectItem(employee, row)
{
    clearSelection();
    selectedItem = employee;
    row.classList.add("selected");
    form.name.value = employee.name;
    form.salary.valueAsNumber = employee.salario;
    form.role_id.value = employee.role_id;
    bDelete.style.display = "inline";
    bCancel.style.display = "inline";
    bSubmit.textContent = "Atualizar";
}

function clearSelection()
{
    clearErrors();
    selectedItem = undefined;
    const row = tableBody.querySelector(".selected");
    if(row)
    {
        row.classList.remove("selected");
    }
    form.name.value = "";
    form.salary.value = "";
    form.role_id.value = "";
    bDelete.style.display = "none";
    bCancel.style.display = "none";
    bSubmit.textContent = "Criar";
}

function getBiggestID()
{
    let biggestId = 0;
    for(let i = 0; i < allEmployees.length; i++)
    {
        if(allEmployees[i].id > biggestId)
        {
            biggestId = allEmployees[i].id;
        }
    }
    return biggestId;
}


async function onSubmit()
{
    const employeeData = 
    {
        "name": form.name.value,
        "role_id": form.role_id.value,
        "salario": form.salary.valueAsNumber
    };
    
    if(!employeeData.id)
    {
        employeeData.id = (getBiggestID() + 1);
    }

    if(!employeeData.name || !employeeData.salario || !employeeData.role_id)
    {
        showError("Você precisa preencher todos os campos.");
    }
    else
    {
        if(selectedItem)
        {
            const updatedItem = await updateEmployee(selectedItem.id, employeeData);
            const i = allEmployees.indexOf(selectedItem);
            allEmployees[i] = updatedItem;
            updateSort();
            selectItem(updatedItem, tableBody.children[i]);
        }
        else
        {
            const createdItem = await createEmployee(employeeData);
            allEmployees.push(createdItem);
            updateSort();
            selectItem(createdItem, tableBody.lastChild);
            tableBody.lastChild.scrollIntoView();
        }
    }
}

async function onDelete()
{
    if(selectedItem)
    {
        await deleteEmployee(selectedItem.id);
        const i = allEmployees.indexOf(selectedItem);
        allEmployees.splice(i, 1);
        updateSort();
        clearSelection();
    }
}

function createFilters()
{
    filters = [];
    for(const roleFilter of roles)
    {
        let label = document.createElement("label");
        let option = document.createElement("input");
        label.textContent = roleFilter.name;
        option.type = "checkbox";
        option.value = roleFilter.id;
        filters.push(option);
        label.append(option);
        filter.append(label, document.createElement("br"));
    }

    for(const curFilter of filters)
    {
        curFilter.addEventListener("change", updateSort);
    }
}

function updateSort()
{
    filterEmployees(getSelectedRoles());
    sortEmployees();
    renderData(employees);
}

function sortEmployees()
{
    let sortBy = sort.value;
    employees.sort((a,b) =>
    {
        switch(sortBy)
        {
            case "id":
                return compare(a.id, b.id);
            case "nameAscending":
                return compare(a.name, b.name);
            case "nameDescending":
                return -1 * compare(a.name, b.name);
            case "bruteSalaryAscending":
                    return compare(a.salario, b.salario);
            case "bruteSalaryDescending":
                return -1 * compare(a.salario, b.salario);
            case "liquidSalaryAscending":
                return compare(a.salario - (getInssDiscount(a.salario)) - getIrrfDiscount(a.salario), b.salario - (getInssDiscount(b.salario)) - getIrrfDiscount(b.salario));
            case "liquidSalaryDescending":
                return -1 * compare(a.salario - (getInssDiscount(a.salario)) - getIrrfDiscount(a.salario), b.salario - (getInssDiscount(b.salario)) - getIrrfDiscount(b.salario));
        }
    });
}

function filterEmployees(filterValues)
{
    if(filterValues.length > 0)
    {
        employees = allEmployees.filter((employee) =>
        {
            return filterValues.indexOf(employee.role_id) != -1;
        });
    }
    else
    {
        employees = allEmployees;
    }
}

function getSelectedRoles()
{
    let checkBoxes = filter.querySelectorAll(":checked");
    let rolesIds = [];

    for(const checkbox of checkBoxes)
    {
        rolesIds.push(parseInt(checkbox.value));
    }

    return rolesIds;
}

function compare(v1, v2)
{
    if(v1 > v2)
    {
        return 1;
    }
    else if(v1 < v2)
    {
        return -1;
    }
    else
    {
        return 0
    }
}

init();