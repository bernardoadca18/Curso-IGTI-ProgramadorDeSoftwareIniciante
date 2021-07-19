var fsList = document.querySelectorAll(".multiple-field");

for(var i = 0; i < fsList.length; i++)
{
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs)
{
    var addButton = document.createElement("button");
    addButton.textContent = "Adcionar";
    addButton.type = "button";
    fs.appendChild(addButton);

    var firstInput = fs.querySelector("input");

    addButton.addEventListener("click", addInput);

    function addInput()
    {
        var div = document.createElement("div");
        var newInput = document.createElement("input");
        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        div.appendChild(newInput);
        div.appendChild(deleteButton);

        deleteButton.addEventListener("click", deleteInput);

        fs.insertBefore(div, addButton);

        function deleteInput()
        {
            div.remove();
        }
    }
}

//AULA 5.4