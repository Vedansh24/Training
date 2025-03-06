

function demo(n){
    {
        return new Promise((resolve,result)=>
        {
            var flag=0;
            if(n%2==0){
                resolve(1);
            }
            else{
                Reject(0);
            }
        })
    }
}
demo(5).then((res)=>{
    console.log("Number is even");
}).catch((error)=>{
    console.log("Number is odd");
});