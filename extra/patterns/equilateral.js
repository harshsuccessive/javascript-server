let a
// n=process.argv[2]
// equilateral(n)
export default function equilateral (x) {
    console.log('print a equilateral triangle with rows ' + x);
    if ( x < 2 && x > 10 ) {
       console.log('enter the value between 2 to 10');
    }
    else {
    for ( let i = 1; i <= x; i++ ) {
          a = '';

    for ( let j = i; j <= x; j++ ) {
          a += ' ';
    }

    for ( let z = i; z > 0; z-- ) {
         a += '* ';
        }
    console.log(a);

     }

}}