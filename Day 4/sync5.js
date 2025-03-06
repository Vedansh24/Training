console.log("no dee");

function check(n,cb)
{
    var flag=0;
    if(n%2==0)
    {
        flag=1;
    }
    cb(flag);
}
var n=5;
check(n,(res)=>
{
    if(res==1)
        console.log("even");
    else
        console.log("odd");


})
console.log("after function execution");