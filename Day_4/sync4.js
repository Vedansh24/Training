console.log("before function execution");

function demo(cd)
{
    console.log("demo function is executed");
    cb();
}
demo(()=>{
    console.log("democallback ");
});
console.log("after ex");

