function solution1()
{
    let employeesPromise = fetch("http://localhost:3000/employees");

    employeesPromise.then((resp) => {
        resp.json().then((employees) =>{
    
        let rolesPromise = fetch("http://localhost:3000/roles");
        rolesPromise.then(resp2 => {
                resp2.json().then(roles =>{
                    let table = renderTable(employees, roles);
                    document.getElementById("app").innerHTML = table;
                });
            });
        });
    });
}

function solution2()
{
    fetchJson("http://localhost:3000/employees").then((employees) => 
    {
        fetchJson("http://localhost:3000/roles").then((roles) => 
        {
            let table = renderTable(employees, roles);
            document.getElementById("app").innerHTML = table;
        }).catch(showError);
    }).catch(showError);
}

function solution3()
{
    Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")]).then(([employees, roles]) => 
    {
        let table = renderTable(employees, roles);
        document.getElementById("app").innerHTML = table;
    }).catch(showError).finally(() => {console.log("Carregou")});
}

async function solution4()
{
    try
    {
        let employees = await fetchJson("http://localhost:3000/employees");
        let roles = await fetchJson("http://localhost:3000/roles"); 
        let table = renderTable(employees, roles);
        document.getElementById("app").innerHTML = table;
    }
    catch(erro)
    {
        showError(erro);
    }
    
}

async function solution5()
{
    try
    {
        let [employees, roles] = await Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")])
        let table = renderTable(employees, roles);
        document.getElementById("app").innerHTML = table;
    }
    catch(erro)
    {
        showError(erro);
    }
    finally
    {
        console.log("Carregou");
    }
}

function fetchJson(url)
{
    return fetch(url).then((resp) => 
    {
        if(resp.ok)
        {
            return resp.json();
        }
        else
        {
            throw new Error(resp.statusText);
        }
    });
}

function renderTable(employees, roles)
{
    let rows = employees.map(employees => {
        let role = roles.find(role => role.id == employees.role_id);
        let ret = 
        `<tr>
            <td>${employees.id}</td>
            <td>${employees.name}</td>
            <td>${role.name}</td>
        </tr>`;
        return ret;
    })
    return `<table>${rows.join("")}</table>`;
}

function showError(error)
{
    document.getElementById("app").innerHTML = "Erro ao carregar dados";
    console.error(error);
}

//solution2();
solution3();
//solution4();
//solution5();
// Aula 8.4