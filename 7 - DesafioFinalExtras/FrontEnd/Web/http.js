const baseUrl = "http://localhost:3000/";
const errorsDiv = document.getElementById("errors");

function fetchJSON(url, options)
{
    return fetch(url, options).then((r) => 
    {
        if(r.ok)
        {
            return r.json();
        }
        else
        {
            throw new Error(r.statusText);
        }
    }).catch(error => 
        {
            showError("Error loading data", error);
            throw error;
        });
}

function getEmployees()
{
    return fetchJSON(`${baseUrl}employees`);
}

function getRoles()
{
    return fetchJSON(`${baseUrl}roles`);
}

function updateEmployee(id, employee)
{
    return fetchJSON(`${baseUrl}employees/${id}`,
    {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
    });
}

function createEmployee(employee)
{
    return fetchJSON(`${baseUrl}employees`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    });
}

function deleteEmployee(id)
{
    return fetchJSON(`${baseUrl}employees/${id}`,
    {
        method: "DELETE"
    });
}

function showError(message, error)
{
    errorsDiv.textContent = message;
    if(error)
    {
        console.error(error);
    }
}

function clearErrors()
{
    errorsDiv.textContent = "";
}