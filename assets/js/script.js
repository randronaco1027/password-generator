// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
    return value;
};

//Create bucket of all possible variables based off prompts
var charPool = "";
var password2 = "";
function generatePassword() {
    var passwordLength = parseInt(prompt("Please enter desired password length"));
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Password must be between 8 and 128 characters"));
    };
    var passwordCap = window.prompt("Would you like capital letters?");
    if (passwordCap === "yes" || passwordCap === "y") {
        // Increase pool size
        charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var passwordLow = window.prompt("Would you like lower case letters?");
    if (passwordLow === "yes" || passwordLow === "y") {
        // Increase pool size
        charPool += "abcdefghijklmnopqrstuvwyz";
    }
    var passwordSpecial = window.prompt("Would you like special characters?");
    if (passwordSpecial === "yes" || passwordSpecial === "y") {
        // Increase pool size
        charPool += " !”#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    }
    var passwordNum = window.prompt("Would you like numbers?");
    if (passwordNum === "yes" || passwordNum === "y") {
        //Increase pool size
        charPool += "0123456789";
    }
    for (var i = 0; i < passwordLength; i++) {
        //loop to keep creating characters
        password2 += randomNumber(0, 9);
    };
    console.log(charPool);
}

console.log(password2);

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
}

generateBtn.addEventListener("click", generatePassword());