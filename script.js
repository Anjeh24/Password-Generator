// Assignment Code
var generateBtn = document.querySelector("#generate");

var empty = "";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!'()*+,-./:;<=>?@[\]^_`{|}~#";

function generatePassword() {
    var password = "";
    var passwordcharacters = "";

//Creating prompt to select length of password

var passwordLength = prompt("How many charaters would you like your password to be? It has to be between 8 and 128 characters.");
passwordLength = parseInt(passwordLength);

if (passwordLength < 8){
    alert("Password must be atleast 8 characters");
    return null;
}

if (passwordLength > 128){
    alert("Password cannot be more than 128 characters");
    return null;

}}


//Choosing/confirming options with yes or no boolean for lowercase

var lowercaseOption = confirm("Add lowercase characters?");

if (lowercaseOption) {
    passwordcharacters += lCase;
}

//Choosing/confirming options with yes or no boolean for uppercase

var uppercaseOption = confirm("Add uppercase characters?");

if (uppercaseOption) {
    passwordcharacters += uCase;
}

//Choosing options (boolean) for numbers

var numericalCharacters = confirm("Add numbers?");

if (numericalCharacters) {
    passwordcharacters += numbers;
}

//Boolean for adding special characters
var specialSymbols = confirm("Add special characters?")

if (specialSymbols) {
    passwordcharacters += specialCharacters;
}

for (var i = 0; i < passwordLength; i++) {
    password = passwordcharacters[Math.floor(Math.random) * passwordcharacters.length)]
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
