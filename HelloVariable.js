// Declares student variable using var keyword 
var studentName;

// Uses assignment operator(=) to assign a value
var studentName = "DNB";
var studentAge = 2;

// To re-assign a variable, use only the variable's name as its already been initialized above in ine 5!
studentName = "Dee";
studentAge = 25;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Dee"
console.log("My name is " + studentName);

/*
* As a class member, I want to input data about my name, the number of pets I own, and a fun fact about myself and log that introduction to the console. Then I want to log a message to introduce my partner by reassigning the variables
*/

var personName = "XYZ";
console.log ("My name is " + personName);
var personName = "ABC";
console.log ("My name is " + personName);

var pets = 2;
console.log (`I have ${pets} pet(s)`);
var pets = 0;
console.log (`I have ${pets} pet(s)`);

var funFact = "I hail from the PartyState/Miami of India --> Goa!";
console.log(`Fun fact: ${funFact}`);
var funFact = "I love snow!";
console.log(`Fun fact: ${funFact}`);


