var fs = require('fs');
var nomeArquivo = "carros.json";
var carros = ["Gol", "Palio", "Uno", "Celta"];
var Concessionaria =
{
    Nome: "Concessionaria XYZ",
    Carros: carros
}
fs.writeFile(nomeArquivo, JSON.stringify(Concessionaria), 
    
    function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            fs.readFile(nomeArquivo, "utf-8", 
            function(err, data)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    var obj = JSON.parse(data);
                    obj.Carros.push("HRV");
                    fs.writeFile(nomeArquivo, JSON.stringify(obj), 
                    function(err)
                    {
                        if(err)
                        {
                            console.log(err);
                        }
                    }
                    );
                }
            }
            );
        }
    }
    );