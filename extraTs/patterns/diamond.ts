let a: string;
// n=process.argv[2];
// diamond(n);

export default function diamond(x: number): void {
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
