/* 
    Add code to show in the console the different data types, add the following values 
42
'Twenty five'
-666
true
0
''
null
undefined
FALSE

*/


console.log( typeof( 42 ) );
console.log( typeof('Twenty five' ) );
console.log( typeof( -666 ) );
console.log( typeof( true ) );
console.log( typeof( 0 ) );
console.log( typeof( '' ) );
console.log( typeof( null ) );
console.log( typeof( undefined ) );
console.log( typeof( FALSE ) );

const nulle = null;
const element_1 = 0; 
const element_2 = [1.2];
const myBigInt = 9007199254740991n;
console.log( typeof( nulle ) );
console.log( typeof myBigInt ); // bigint
console.log( typeof( false ) );
console.log( typeof( [element_1 , element_2 , "Jonh Doe", 38, {}, {}  ] ) );
console.log( typeof( sd ) );
console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string' empty string
console.log( typeof " " ); // 'string'
console.log( 3*"You're not polite" ); // NaN
console.log( typeof ( 3 * "Worker friend") ); // 'number'
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3T3m4t1c Fr1d4y" ) ); // 'string'
console.log( 4 / 0 ); // +Infinity
