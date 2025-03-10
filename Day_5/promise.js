console.log("Before fuction execution");

function checkarm(n){
    return new Promise((resolve,reject)=>{
        var len,rem,temp,sum=0;
        len=n.toString().lenght;
        temp=n;
        while(n>0){
            rem=n%10;
            sum=sum+Math.pow(rem,len);
            n=parseInt(n/10);
        }
        
    })
}