console.log('hellp')
// console.log(a)
console.log(b)
let a = 10;
var b = 20;

// o/p: Uncaught ReferenceError: Cannot access 'a' before initialization
// this will break because of the erro and b is also not printed on the console

console.log(c)
var c = 30;

// o/p: this will work as this goes in global scope instead of script scope 

// The time which JS assigns memory to let a and initialise the value is called 
// temporal dead zone

console.log(window.b) // 10
console.log(window.a) //undefined

// duplicate declaration of let
// let a = 100; 
// Syntax errir : Identifier 'a' has already been declared 


const pi = 3.14
console.log(pi)
// pi = 3.147 this is an type error 

// const l;
// syntax error as it has to initalised 

