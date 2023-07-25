// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// // We create a variable called name and set it to Dane as a string.
// Then we create a conditional that console logs "Hi, Mary" if the value of "name" is Mary.
// If the value of "name" is not Mary, then we console log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret with no value.
// Then we create a variable called code and give it the value of 123.
// Then we create a conditional stating that if the value of "code" is of equal value and equal type of the number 123,
// the value of "secret" will be a string called "super" and the value of code will change to twice the amount it previous was.
//
// If the value of code is greater than 250, the value of secret will be a string called "duper".
// Then we console log our secret variable to see the value of it.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable called isStudent and assign it a boolean value of true.
// Create a variable called Age and set it to 34 as a number. 
// Create a variable called zip and set it to 55407 as a number.
// Then create conditional that console logs `You're a student on the West Coast!` if isStudent is true and the value of zip is greater than 80000.
// Console log "What are your Hobbies?" if isStudent is false or the value of age is less than 30.
// Console log "Welcome to Prime!" if isStudent is true.
// Otherwise console log "How about the weather?"
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/


//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX: colorOne should be set to blue and colorTwo should be set to red, they are switched in the code that was given. 
// let colorOne = "blue"; let colorTwo = "red"
// in the if statement, colorTwo should also be changed to purple. colorTwo = "purple" below colorOne = "purple"
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'
//
// FIX: time shouldn't be a constant variable so change that to let time = 4;
// the compound conditional should be && not ||
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
//
// FIX: This one is switched around 
// the was minAge <= age works but seems more confusing so it isn't technically wrong but I would change that to: if (age >= minAge)
// but then the console log on that first if statement should read "enter"
// in the description it doesn't say anything about returning "no entry" if the age is less than the minAge so get rid of that.
// the code should read if(age >= minAge){console.log("enter")} and that's all the description says it needs. 
// I don't think the "no entry" console log for under the minAge is a bad thing to add but given the description I am going off of it is not needed.
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

