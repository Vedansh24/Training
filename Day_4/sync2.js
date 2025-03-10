console.log("before");

function demo()
{
    console.log("demo fun")
}
setTimeout(demo,3000);
setInterval(demo,1);
console.log("after");