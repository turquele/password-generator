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
  let userChoices = { // and object to store user choices
    length: 0,
    lower: false,
    upper: false,
    numbers: false,
    special: false,
  };
  
  while (userChoices.length < 10 || userChoices.length >64 || isNaN(userChoices.length)) { //password lengh
    userChoices.length = prompt("Length of password?");
    userChoices.length = Number(userChoices.length);
    if (userChoices.length < 10 || userChoices.length >64 || isNaN(userChoices.length)) {
      alert("Please introduce a valid number between 10 and 64");
    } else {
      console.log("Required Lenght:" + userChoices.length);
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

  userChoices.lower = prompt("Do you need Lowercases? (Y/N)");
  while (validate(userChoices.lower) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    userChoices.lower = prompt("Do you need Lowercases? (Y/N)");
  }
  userChoices.lower = evaluate(userChoices.lower);

  userChoices.upper = prompt("Do you need Uppercases? (Y/N)");
  while (validate(userChoices.upper) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    userChoices.upper = prompt("Do you need Uppercases? (Y/N)");
  }
  userChoices.upper = evaluate(userChoices.upper);

  userChoices.numbers = (prompt("Do you need numbers? (Y/N)"));
  while (validate(userChoices.numbers) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    userChoices.numbers = (prompt("Do you need numbers? (Y/N)"));
  }
  userChoices.numbers = evaluate(userChoices.numbers)

  userChoices.special = prompt("Do you need Special Characters? (Y/N)");
  while (validate(userChoices.special) == false) {
    alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
    userChoices.special = prompt("Do you need Special Characters? (Y/N)");
  }
  userChoices.special = evaluate(userChoices.special);

  // In the case that the user don't choose any character set
  while (userChoices.lower == false && userChoices.upper == false && userChoices.numbers == false && userChoices.special == false) {
    alert("At least one set of characters has to be used to generate the password.");
    userChoices.lower = prompt("Do you need Lowercases? (Y/N)");
    while (validate(userChoices.lower) == false) {
      alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
      userChoices.lower = prompt("Do you need Lowercases? (Y/N)");
    }
    userChoices.lower = evaluate(userChoices.lower);

    userChoices.upper = prompt("Do you need Uppercases? (Y/N)");
    while (validate(userChoices.upper) == false) {
      alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
      userChoices.upper = prompt("Do you need Uppercases? (Y/N)");
    }
    userChoices.upper = evaluate(userChoices.upper);

    userChoices.numbers = (prompt("Do you need numbers? (Y/N)"));
    while (validate(userChoices.numbers) == false) {
      alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
      userChoices.numbers = (prompt("Do you need numbers? (Y/N)"));
    }
    userChoices.numbers = evaluate(userChoices.numbers)

    userChoices.special = prompt("Do you need Special Characters? (Y/N)");
    while (validate(userChoices.special) == false) {
      alert("That is not a valid answer, please use Y or N in your keyboard to answer. (Your answer is not case sensitive)");
      userChoices.special = prompt("Do you need Special Characters? (Y/N)");
    }
    userChoices.special = evaluate(userChoices.special);
  }

  return userChoices

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
  userChoices = getPasswordOptions();
  console.log(userChoices);
  let userCharSet = [] // An array with the set of characters chosen by the user.
  let password = ""

  if (userChoices.lower == true) {
    userCharSet.push(...lowerCasedCharacters); // We add lowercase to user char set
    password += getRandom(lowerCasedCharacters); // We guarantee at least one lowercase in the password
  }

  if (userChoices.upper == true) {
    userCharSet.push(...upperCasedCharacters);
    password += getRandom(upperCasedCharacters);
  }

  if (userChoices.numbers ==true) {
    userCharSet.push(...numericCharacters);
    password += getRandom(numericCharacters);
  }

  if (userChoices.special == true) {
    userCharSet.push(...specialCharacters);
    password += getRandom(specialCharacters);
  }

  let missingCharacters = userChoices.length - password.length; //We complete the password

  for (let index = 0; index < missingCharacters; index++) {
    password += getRandom(userCharSet);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);