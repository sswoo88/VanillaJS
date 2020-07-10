// JavaScript is very flexible
// flexible === dangerous

// 1. Use strict
// added in ECMASript 5
// Whole-script strict mode syntax
// use this for Vanilla Javascript
"use strict";

// 2. Variable, rw(read,write)
// let (added in ES6)
// mutable data type
let globalName = 'global name';
{
    let name = 'Shin';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(globalName);
console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{    
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

// 4. Variable types
// premitive(direct save in memory), single item : number, string, boolean, null, undefined, symbol
// object(reference save in memory), box container
// function, first-class function(used parameter, return, variable)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

// number - specific numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) => ``
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined; // or let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //ture
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life object, data structure
const shin = { name : 'shin', age : '20'};
shin.age = 22;
console.log(`value: ${shin}, type: ${typeof shin}`);
console.log(`value: ${shin.age}, type: ${typeof shin.age}`);

// 5. Dynamic typing: dynamically typed language

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); //runtime error => typescript : TS


