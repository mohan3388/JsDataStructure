
const rand =[];
for(i=1; i<=10; i++)
{
    rand.push(Math.floor(Math.random()*900));
}
console.log(rand);


console.log(rand.sort());

console.log("2nd Largest number: "+rand[rand.length-2]);
console.log("2nd Smallest number: "+rand[1]);


