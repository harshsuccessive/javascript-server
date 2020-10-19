let n;
let f;
n= process.argv[2];
f= fact(n)
console.log(f)
function fact(n)
{
    if(n==0)
    {
        return 1;
    }
    else
    {
    return (n*fact(n-1));

    }
}