console.log("====================================================");
var contador1 = 1;
while(contador1 <= 5)
{
    console.log(contador1);
    contador1++;
}

console.log("====================================================");

var contador2 = 1;
do
{
    console.log(contador2);
    contador2++;
}
while(contador2 <= 5);

console.log("====================================================");

for(var contador3 = 1; contador3 <= 5; contador3++)
{
    if(contador3 % 2 == 0)
    {
        continue;
    }
    console.log(contador3);
}

console.log("====================================================");