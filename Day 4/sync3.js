console.log("Before execution function ");

function fact(n)
{
    var f=1,i;
    for(i=1;i<=n;i++)
    {
        f=f*i;
    }
    return f;
}
var n=6;
//fact(n);

setTimeout(()=>{
    console.log("fact= "+fact(n));
},3000);

console.log("After execution");