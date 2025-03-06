console.log("Before funtion execution");

function check(n,cb){

    var flag=0;
    if(n%2==0){
        flag=1;
    }

     setTimeout(()=>{cb(flag);},2000);
}

var n=4;
check(n,(res)=>{
    if(res==1){
        console.log("even");
    }
    else
        console.log("odd");
})

console.log("After function executing");
    
    

