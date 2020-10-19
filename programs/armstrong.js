let n=153
let c,d;
let a=0;
let temp=n;
c=count(n)
function count(n)
{
    c=n.toString().length
    return c;
}
function armstrng(n)
{
    while(n>0){
    d=n%10
    a=a+Math.pow(d, c);
    n=Math.floor(n/10)
}
if(a==temp){

    console.log("No. is an armstrong number",a)
}
else{
    console.log("No. is not an armstrong number",a)
}

}
armstrng(n)