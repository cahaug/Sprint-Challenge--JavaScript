console.log('==== Callbacks ====');  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

  function consume (a, b, cb){
    return cb(a,b)
  }


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (a,b){
  return a+b;
}
function multiply (a,b){
  return a*b;
}
function greeting (firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


console.log('==== Closures ====');

// Explain in your own words why `nestedFunction()` can access the variable `internal`.

// Explanation: 

  /**
  nestedFunction() can access `internal` because of Javascript closures.  Nested functions can always pull variables from any function they are children of and any other global variables, but the opposite is not true.  Any other functions not nested in myFunction or nestedFunction cannot access internal, it is private because of the closures.

   */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();