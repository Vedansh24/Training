console.log("Before execution ");
function checkarm(n,cb){
    var len,temp,sum=0;
    len=n.toString().length;
    temp=n;
    while(n>0){
        var rem=n%10;
        sum=sum+Math.pow(rem,len);
        n=parseInt(n/10);
    }
    if (sum==temp)
    cb(1);

    else
    cb(0);


}
var n=153;
checkarm(n,(res)=>{
    if(res==1)
    {
        console.log("no is armstrong ");
    }
    
    else
    {
        console.log("no is not armstrong ");
    }

})


console.log("After execution");