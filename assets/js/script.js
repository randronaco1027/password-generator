//Reject wrong answer
var test = function () {
    var response = prompt("Question?");
    if (response === "" || response === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        test();
    }
    return response;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button


var passwordLength;
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
    return value;
};

//Create bucket of all possible variables based off prompts

var password = "";
function generatePassword() {
    var passwordLength = parseInt(prompt("Please enter desired password length"));
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Password must be between 8 and 128 characters"));
    }
    console.log(passwordLength);
    for (var i = 0; i < passwordLength; i++) {
        //loop to keep creating characters
        password += randomNumber(0, 9);

        console.log(passwordLength);
    };
}

generatePassword();

console.log(password);

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generateBtn.addEventListener("click", writePassword);



// var password = {
//     length: passwordLength,
//     // characters: getCharacters(), //need to create this function
// };
//add function ro repeat if < 8 or > 128
