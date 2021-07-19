var fs = require("fs");
var presidentes = JSON.parse(fs.readFileSync("./UsPresidents.json").toString()).usPresidents;

// For of
/*
let i = 0;
for(let item of presidentes)
{
    i++;
    console.log(i + ": " + item.PresidentName);
}
*/

// Foreach
/*
presidentes.forEach((item, index) => {
    console.log((index+1) + ": " + item.PresidentName);
});
*/

// Map
/*
let names = presidentes.map((item) => item.PresidentName + " - " + item.Took_office);
console.log(names);
*/

// Filter
/*
let republicanos = presidentes.filter((item) => item.Party == "Republican");
console.log(republicanos.map((item) => item.PresidentName));
*/

// Find
/*
var primeiroDem = presidentes.find((item) => item.Party == "Democratic");
console.log(primeiroDem);
*/

// Sort
var maisJovemPosse = presidentes.sort((i1, i2) => {
    if(parseInt(i1.Took_office) - parseInt(i1.Birth_year) < parseInt(i2.Took_office) - parseInt(i2.Birth_year))
    {
        return -1;
    }
    else if(parseInt(i1.Took_office) - parseInt(i1.Birth_year) > parseInt(i2.Took_office) - parseInt(i2.Birth_year))
    {
        return 1;
    }
    else
    {
        return 0;
    }
});

console.log(maisJovemPosse[1]);