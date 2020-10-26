let a;
// n=process.argv[2];
// diamond(n);

<<<<<<< HEAD
export default function diamond(x) {
    console.log('print a diamond with rows ' + x);
    if ( x < 2 && x > 10 ) {
       console.log('enter the value between 2 to 10');
    }
    else {
    for ( let i = 0; i < x; i++ ) {
        a = '';
    for ( let j = i; j < x - 1 ; j++ )
        a += ' ';
    for ( let z = i; z >= 0; z-- )
        a += '* ';
=======
export default function diamond(x)
{
    console.log("print a diamond with rows "+x);
    
    if( x<2 && x>10 ){
       console.log("enter the value between 2 to 10");
    }
    else{

    for(let i=0; i<x; i++)
     { 
        a="";

    for(let j=i; j<x-1; j++)
        a+=" ";

    for (let z=i; z>=0; z--)
        a+="* ";
>>>>>>> 8e5ec29b98f4ac62767f62c4e2deb8cabd179f3c

    console.log(a);

     }
    for ( let i = 0; i < x; i++ ) {
          a = '';

    for ( let j = i; j > 0; j-- )
        a += ' ';

    for ( let z = i; z < x; z++ )
        a += '* ';
     console.log(a);

     }
}}
