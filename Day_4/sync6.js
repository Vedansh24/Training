console.log("Before funtion execution");

function demo(cb){

     console.log("demo function is execution");
     setTimeout(cb,2000);
}

demo(()=>{
    console.log("demo call back function in execution");
});

console.log("after function executing");