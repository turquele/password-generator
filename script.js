// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let requiredLenght = 0, lowerInput, upperInput, numbersInput, specialInput;
  let passwordOptions = { // and object with user options
    length: 0,
    lower: false,
    upper: false,
    numbers: false,
    special: false,
  };
  
  while (requiredLenght < 10 || requiredLenght >64 || isNaN(requiredLenght)) { //password lengh
    requiredLenght = prompt("Length of password?");
    requiredLenght = Number(requiredLenght)
    if (requiredLenght < 10 || requiredLenght >64 || isNaN(requiredLenght)) {
      alert("Please introduce a valid number between 10 and 64");
    } else {
      passwordOptions.length = requiredLenght;
      console.log("Required Lenght:" + passwordOptions.length);
    }
  }
  
  function validate(response) { // A function to validate Y/N prompts
    if (response == "Y" || response == "y" || response == "N" || response == "n") {
      return true;
    } else {
      return false
    }
  }

  function evaluate(response) { // A function to differeciate Y from N
    if (response == "Y" || response == "y") {
      return true;
    } else {
      return false
    }
  }

  lowerInput = prompt("Do you need Lowercases? (Y/N)");
  while (validate(lowerInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    lowerInput = prompt("Do you need Lowercases? (Y/N)");
    console.log("lower" + lowerInput);
  }
  passwordOptions.lower = evaluate(lowerInput);

  upperInput = prompt("Do you need Uppercases? (Y/N)");
  while (validate(upperInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    upperInput = prompt("Do you need Uppercases? (Y/N)");
    console.log("upper" + upperInput);
  }
  passwordOptions.upper = evaluate(upperInput);

  numbersInput = (prompt("Do you need numbers? (Y/N)"));
  while (validate(numbersInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    numbersInput = (prompt("Do you need numbers? (Y/N)"));
    console.log("numbers" + numbersInput);
  }
  passwordOptions.numbers = evaluate(numbersInput)

  specialInput = prompt("Do you need Special Characters? (Y/N)");
  while (validate(upperInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    specialInput = prompt("Do you need Special Characters? (Y/N)");
    console.log("special" + specialInput);
  }
  passwordOptions.special = evaluate(specialInput);

  // In the case that the user don't choose any character set
  while (passwordOptions.lower == false && passwordOptions.upper == false && passwordOptions.numbers == false && passwordOptions.special == false) {
    alert("At least one set of characters has to be used to generate the password.");
    lowerInput = prompt("Do you need Lowercases? (Y/N)");
  while (validate(lowerInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    lowerInput = prompt("Do you need Lowercases? (Y/N)");
    console.log("lower" + lowerInput);
  }
  passwordOptions.lower = evaluate(lowerInput);

  upperInput = prompt("Do you need Uppercases? (Y/N)");
  while (validate(upperInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    upperInput = prompt("Do you need Uppercases? (Y/N)");
    console.log("upper" + upperInput);
  }
  passwordOptions.upper = evaluate(upperInput);

  numbersInput = (prompt("Do you need numbers? (Y/N)"));
  while (validate(numbersInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    numbersInput = (prompt("Do you need numbers? (Y/N)"));
    console.log("numbers" + numbersInput);
  }
  passwordOptions.numbers = evaluate(numbersInput)

  specialInput = prompt("Do you need Special Characters? (Y/N)");
  while (validate(upperInput) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    specialInput = prompt("Do you need Special Characters? (Y/N)");
    console.log("special" + specialInput);
  }
  passwordOptions.special = evaluate(specialInput);
  }

  return passwordOptions
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  let userCharSet = [] // An array with the set of characters chosen by the user.
  let password = ""

  if (passwordOptions.lower == true) {
    userCharSet.push(...lowerCasedCharacters); // We add lowercase to user char set
    password += getRandom(lowerCasedCharacters); // We guarantee at least one lower case in the password
  }

  if (passwordOptions.upper == true) {
    userCharSet.push(...upperCasedCharacters);
    password += getRandom(upperCasedCharacters);
  }

  if (passwordOptions.numbers ==true) {
    userCharSet.push(...numericCharacters);
    password += getRandom(numericCharacters);
  }

  if (passwordOptions.special == true) {
    userCharSet.push(...specialCharacters);
    password += getRandom(specialCharacters);
  }

  let missingCharacters = passwordOptions.length - password.length; //We complete the password

  for (let index = 0; index < missingCharacters; index++) {
    password += getRandom(userCharSet);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);