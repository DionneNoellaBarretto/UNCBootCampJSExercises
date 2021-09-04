//Primitive data types include undefined, string, number and boolean
//Undefined variables haven't been assigned values yet.
var myUndefined;

// A string is a series of characters and is surrounded by quotes 
var myStringWelcome = "Hello World"; 
var myStringPassword = "865Password!2020";

// A number can be either an integer or a decimal  
var myNumberInt = 100;
var myNumberDecimal = 100.100;

// Booleans have two values: true or false
var isMyBooleanTrue = true;
var isMyBooleanFalse = false;

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined
console.log(typeof myUndefined);

// Logs number
console.log(typeof myNumberInt); 

// Logs boolean
console.log(typeof true);

// Logs string
console.log(typeof "Howdy");

// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!
// Logs number
var myVariable = 33;
console.log(typeof myVariable);

// myVariable is reassigned; Logs boolean
myVariable = false;
console.log(typeof myVariable);

//  global initialization of variables
var one = 64;
var two = "656302";
var three = false;
var four = 64.55;
var five = "Howdy!";
var six;

// Insert comments to explain what each console log below will log to the console
console.log(typeof one);  //Number
console.log(typeof two);  // String
console.log(typeof three);  //Boolean
console.log(typeof four); //Number
console.log(typeof five); //String
console.log(typeof six); //Undefined

// reassigning the values for 3 previously defined variables
four = "Hello!";
five = false;
six = 23;

// Insert comments to explain what each console log below will log to the console
console.log(typeof four); //String
console.log(typeof five); //Boolean
console.log(typeof six); //Number