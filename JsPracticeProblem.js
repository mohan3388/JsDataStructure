
const rand =[];
for(i=1; i<=10; i++)
{
    rand.push(Math.floor(Math.random()*900));
}
console.log(rand);


console.log(rand.sort());

console.log("2nd Largest number: "+rand[rand.length-2]);
console.log("2nd Smallest number: "+rand[1]);



//Uc2
const arr=[];
const val=15;
var count=0;
for(i=2; i<=val; i++)
{
    for(j=1; j<=i; j++)
    {
        if(i%j==0)
        {
            count++;
           
        }
    }
    if(count==2)
    {
        arr.push(i);
    }
    count =0;
}
console.log("Prime Factor: "+arr);

//Uc3

const arr2=[];
for(i=1; i<=100; i++)
{
    if(i%11==0)
    {
        arr2.push(i);
    }
  
}
console.log("twice number: "+arr2);