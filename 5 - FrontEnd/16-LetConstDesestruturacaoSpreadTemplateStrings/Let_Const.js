let a = 1;
const b = 1;
a = 2;

console.log(a);
console.log(b + '\n');


function teste()
{
    for(var i = 0; i < 5; i++)
    {

    }
    for(let j = 0; j < 5; j++)
    {

    }
    console.log("I: " + i);
    console.log("J: " + j);
}

teste();