// Assignment code here


//Here we are using the function arrayFromLowToHigh to store the chars that we want in a variable in the global scope.

var UpperCase = arrayFromLowToHigh(65, 90) // Characters(65 - 90)= A-Z Uppercase 
var LowerCase = arrayFromLowToHigh(97, 122) // Characters(97 - 122)= a-z Lowercase 
var NumberChar = arrayFromLowToHigh(48, 57) // Characters(48 - 57)= 0-9 Numbers
var SymboChar = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)) // Characters (33-47)(58-64)(91-96)(123-126) symbols

var s = String.fromCharCode.apply(null, SymboChar); // Characters (33-47)(58-64)(91-96)(123-126) symbols
var l = String.fromCharCode.apply(null, LowerCase); // Characters(97 - 122)= a-z Lowercase 
var u = String.fromCharCode.apply(null, UpperCase); // Characters(65 - 90)= A-Z Uppercase 
var n = String.fromCharCode.apply(null, NumberChar); // Characters(48 - 57)= 0-9 Numbers
console.log(typeof s)
// split method converts string into array
s = s.split('');
l = l.split('');
n = n.split('');
u = u.split('');


// This function loop, sorts the chars from low to high; We don't use methods because we are fecthing these from the char method.
function arrayFromLowToHigh(low, high) {
  var array = [];

  for(let i = low; i <= high; i++){
    
    array.push(i)
  }
  return array
}
// end of our low to hight function




// function that provides user with the password rules
function passwordRules(){
  

  // The parseInt method turns the string into a interger which allows for us to use it in a if statment and in our password length loop.
   var value = parseInt(prompt("How many characters would your password contain?"),10);

  

   
    // if statment using the or operators alerting user if they don't enter the correct range 8-129 
    if( value < 8 || value > 129 || !value ){
    alert('password length should be a number, Character must be more than 8 characters and must be less than 129 characters')
    // return null so that our prompt exits
    return null
   }
   
   // confrim adds a OK/True or CANCEL/false button to our prompt. Here we add it to know what characters our user wants
   var sChar = confirm('click to add Special characters');
   var nChar = confirm('click to add number characters');
   var lChar = confirm('click to add lowerCase characters');
   var uChar = confirm('click to add UpperCase characters');
  
   // if statment that return an alert to the user if they don't make a characters selection. if the user hits the CANCEL/false button that is displayed by the confirm method, this if statment gets executed.
   if (!sChar && !nChar && !lChar && !uChar ){
    
    alert('Must select at least one character type')
    // return null so that our prompt exits
    return null
   
   }
   // We stored our password in an object without it we won't get the value displayed.
   var passwordStorage = {
    value: value,
    sChar: sChar,
    nChar: nChar,
    uChar: uChar,
    lChar: lChar,
   };
   return passwordStorage
  
}
//End of password rules function 

// Function will create a random char by pulling chars from the chosen arrays below.
function randomPassword(arr){
  
  var rp = Math.floor(Math.random() * arr.length);
  var pr = arr[rp];

   return pr;
}



function generatePassword(){

  // storing the function passwordRules in a local variable to have access to it's data.
  var options = passwordRules();

  // the code starts by creating empty arrays 
var lastPassword = [];

var secondInteration = [];

var fisrtIteration = [];

// if option is false it will return null
if (!options) return null;



// each of these if statment will pull one character from each char.
if (options.sChar) {
  secondInteration = secondInteration.concat(s);
  fisrtIteration.push(randomPassword(s));

 
}
if (options.lChar) {
  secondInteration = secondInteration.concat(l);
  fisrtIteration.push(randomPassword(l));
}
if (options.uChar) {
  secondInteration = secondInteration.concat(u);
  fisrtIteration.push(randomPassword(u));
}

if (options.nChar) {
  secondInteration = secondInteration.concat(n);
  fisrtIteration.push(randomPassword(n));
}


 


// this for loop will use the users input for the length of the password.
for(var i = 0; i < options.value; i++) {
  var possibleCharacter = randomPassword(secondInteration);

  lastPassword.push(possibleCharacter);
}
for (var i = 0; i < fisrtIteration.length; i++) {
  lastPassword[i] = fisrtIteration[i];
}
//Finally, all of these passwords are combined together into one string using join().
return lastPassword.join('');
}








// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)