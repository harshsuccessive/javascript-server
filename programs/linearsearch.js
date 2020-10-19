let a=[11,15,17,18,21]
let c=a.length
let flag=0
n=12;
for(i=0;i<c;i++)
{
    if(a[i]==n)
    {
        flag=1
        break
    }
    else{
        flag=0
    }
}
if(flag==1)
{
    console.log("element found")
}
else{
    console.log("element not found")
}
