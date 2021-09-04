var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// Modulus returns the remainder between two numbers.  
console.log(a % b);

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c);
console.log(b != c);

// Compares equality and type (strict equality)
console.log(b === c);
console.log(b !== c);

// Greater than or less than
console.log(a > b);
console.log(a < b);

// Greater than or equal to and less than or equal to
console.log(a <= b);
console.log(a >= b);

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c);
var expression2 = (a > b);

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2);

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2);

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

// Returns false
console.log(!expression2);

// EXERCISE TASK: * When I open the console, all the logs should read `true`, but right now they do not!

var x = "50";
var y = 50;
var z = 100;
var m = z % y;
var n = z / 2;

var expression1 = (y === n);
var expression2 = (n < m);

// Use comparison operators so all expressions below log to the console as true
console.log(x === y);
// answers
console.log(x == y); //looseComparison
console.log(x === (y.toString()));


console.log(y !== n);
//answers
console.log( y == n); //looseComparison
console.log( y === n); //strictComparison
console.log( y !== x); 

console.log(z < y);
//answers
console.log(y < z); // less than
console.log(z > y); // swap the order and the operator
console.log(z !== y); // change the operator

console.log(m > 0);
//answers
console.log(m == 0); //looseComparison
console.log(m===0);//strictComparison

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
//answers
console.log(expression1 || expression2);
console.log(expression1 && !expression2);

console.log( !expression1 || expression2);
//answers
console.log( !(!expression1 || expression2));
console.log( expression1 || expression2);

  