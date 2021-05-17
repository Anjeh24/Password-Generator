
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!'()*+,-./:;?@[\]^_`{|}~#";
var passwordcharacters = "";
var passwordLength;



    function displayPassword(){

    //Creating prompt to select length of password

     passwordLength = prompt("How many characters would you like your password to be? It has to be between 8 and 128 characters.");

     passwordLength = parseInt(passwordLength);

     if (passwordLength >= 8 && passwordLength <= 128){

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
        }

        else {

        alert("Password cannot be less than 8 char or more than 128 characters");

        passwordLength = prompt("How many charaters would you like your password to be? It has to be between 8 and 128 characters.");

        passwordLength = parseInt(passwordLength);
}

}


         function generatePassword() {

         let password=""

         document.getElementById("password").innerHTML = "";

         displayPassword();

         for (var i = 0; i < passwordLength; i++) {

         password += passwordcharacters.charAt(

         Math.floor(Math.random() * Math.floor(passwordcharacters.length - 1)));
}
         var passwordText = document.getElementById("password");

          passwordText.innerText= password;

}
