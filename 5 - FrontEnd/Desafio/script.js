let constEmployees = [];
let employees = [];
let roles = [];
const sort = document.getElementById("sort");
const filter = document.getElementById("filter");
const employeesTitle = document.getElementById("employeesTitle");
let sortType;
let filterType;
let tableBody = document.getElementById("tabelaBody");
let filters = [];
let selectedFilters = [];


async function init()
{
    [employees, roles] = await Promise.all([getEmployees(), getRoles()]);
    constEmployees = employees;
    sortByNameAscending();
    updateSort();
    updateFilter();
    renderFilters();
    addListenersToFilters();
    renderData();
    sort.addEventListener("change", updateSort);
    
}
init();

function renderData()
{
    tableBody.innerHTML = "";
    for(const employee of employees)
    {
        let id = employee.id;
        let name = employee.name;
        let salary = employee.salary;
        let role = roles.find((role) => role.id == employee.role_id);
        
        let row = document.createElement("tr");

        let tId = document.createElement("td");
        let tName = document.createElement("td");
        let tSalary = document.createElement("td");
        let tRole = document.createElement("td");

        tId.innerHTML = id;
        tName.innerHTML = name;
        tSalary.innerHTML = salary;
        tRole.innerHTML = role.name;

        row.appendChild(tId);
        row.appendChild(tName);
        row.appendChild(tSalary);
        row.appendChild(tRole);

        tableBody.appendChild(row);
        employeesTitle.innerHTML = "Employees (" + employees.length + ")"; 
    }
}

function renderFilters()
{
    filters = [];
    filter.innerHTML = "";
    for(const roleFilter of roles)
    {
        let label = document.createElement("label");
        let option = document.createElement("input");
        label.innerHTML = roleFilter.name;
        option.type = "checkbox";
        option.name = roleFilter.id;
        filters.push(option);
        label.appendChild(option);
        filter.appendChild(label);
        filter.appendChild(document.createElement("br"));
    }
}

function addListenersToFilters()
{
    for(const curfilter of filters)
    {
        curfilter.addEventListener("change", filterEmployees);
    }
}

function filterEmployees()
{
    console.log("A");
    let newEmployees = [];
    
    for(const curFilter of filters)
    {
        if(curFilter.checked)
        {
            for(const employee of constEmployees)
            {
                if(employee.role_id == curFilter.name)
                {
                    newEmployees.push(employee);
                }
            }
        }
    }
    employees = newEmployees;
    updateSort();
    renderData();
}

function updateSort()
{
    sortType = sort.value;
    if(sortType == "nameA")
    {
        sortByNameAscending();
    }
    else if(sortType == "nameD")
    {
        sortByNameDescending();
    }
    else if(sortType == "salaryA")
    {
        sortBySalaryAscending();
    }
    else
    {
        sortBySalaryDescending();
    }
    renderData();
}

function updateFilter()
{
    filterType = filter.value;
}

function sortByNameAscending()
{
    employees.sort(function(a,b)
    {
        if(a.name.toLowerCase() < b.name.toLowerCase())
        {
            return -1;
        }
        if(a.name.toLowerCase() > b.name.toLowerCase())
        {
            return 1;
        }
        return 0;
    });
}

function sortByNameDescending()
{
    employees.sort(function(a,b)
    {
        if(a.name.toLowerCase() > b.name.toLowerCase())
        {
            return -1;
        }
        if(a.name.toLowerCase() < b.name.toLowerCase())
        {
            return 1;
        }
        return 0;
    });
}

function sortBySalaryAscending()
{
    employees.sort(function(a,b)
    {
        if(a.salary < b.salary)
        {
            return -1;
        }
        if(a.salary > b.salary)
        {
            return 1;
        }
        return 0;
    });
}

function sortBySalaryDescending()
{
    employees.sort(function(a,b)
    {
        if(a.salary > b.salary)
        {
            return -1;
        }
        if(a.salary < b.salary)
        {
            return 1;
        }
        return 0;
    });
}