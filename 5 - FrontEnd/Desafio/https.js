const baseUrl = "http://localhost:3000/"

function fetchJson(url)
{
    return fetch(url).then((r) => 
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
    return fetchJson(`${baseUrl}employees`);
}

function getRoles()
{
    return fetchJson(`${baseUrl}roles`);
}

function showError(message, error)
{
    document.getElementById("errors").textContent = message;
    if(error)
    {
        console.error(error);
    }
}

function clearErrors()
{
    document.getElementById("errors").textContent = "";
}