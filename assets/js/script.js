// Assignment code here
//Determine password length
// var passwordLength = {
//     passwordLength: window.prompt("How long do you want your password to be? 8-128 Characters"),
// };

// for (var i = 0; i < passwordLength; i ++) {
//     //Cycle through this until you get password length
// }

//Prompts are stored as text, use this to convert to number
// parseInt(passwordLength);

//Reject wrong answer
var test = function() {
    var response = prompt("Question?");
    if (response === "" || response === null) {
      window.alert("You need to provide a valid answer! Please try again."); 
      test();
    }
    return response;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
var passwordLength; 

function getPasswordLength() {
    var passwordLength = prompt("Please enter desired password length");
    while (passwordLength < 8 || passwordLength > 128){
        passwordLength = prompt("Password must be between 8 and 128 characters");
    } 
    console.log(passwordLength)
}

const passwordDigit = [];
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random()*(max-min)+min);
    return value;
};
for (var i = 0; i < passwordLength; i++){
    //loop to keep creating characters
    passwordDigit[i] = randomNumber(0, 9);
    console.log(passwordDigit[i]);
};

var password = {
    length: getPasswordLength(),
    // characters: getCharacters(), //need to create this function
};
//add function ro repeat if < 8 or > 128
