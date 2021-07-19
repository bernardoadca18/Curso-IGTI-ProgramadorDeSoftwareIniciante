var fs = require('fs');
var nomeArquivo = "MeuArquivo.txt";

console.log("1");

fs.writeFile(nomeArquivo, "Top text.", 

function(err)
{
    if(err !== null)
    {
        console.log(err);
    }
    else
    {
        fs.appendFile(nomeArquivo, "\nBottom Text.", 
        function(err)
        {
            if(err !== null)
            {
                console.log(err);
            }
            else
            {
                fs.readFile(nomeArquivo, "utf-8", 
                function(err, data)
                {
                    if(err !== null)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log(data);
                    }
                }
                );
            }
        }
        );
    }
}

);

console.log("2");