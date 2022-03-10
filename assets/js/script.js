// Assignment code here
//Determine password length
var passwordLength = {
    passwordLength: window.prompt("How long do you want your password to be? 8-128 Characters"),
};

for (var i = 0; i < passwordLength; i ++) {
    //Cycle through this until you get password length
}

//Prompts are stored as text, use this to convert to number
parseInt(passwordLength);

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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPasswordLength() {
    var userAdjective = prompt("How long would you like your password to be?");
    alert (userAdjective);
}
//add function ro repeat if < 8 or > 128
switch () {

}