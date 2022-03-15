//Create Password
function generatePassword() {
    var passwordLength = parseInt(prompt("Please enter desired password length"));
    //Establish how long password will be (min 8 characters, max 128 characters)
    while (passwordLength < 8 || passwordLength > 128) { //Needs to ignore non numbers
        passwordLength = parseInt(prompt("Password must be between 8 and 128 characters"));
    };
    var charPool = "";
    var passwordCap = window.prompt("Would you like capital letters?");
    //Include capital letters as possibility for password
    if (passwordCap === "yes" || passwordCap === "y") {
        charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    //Include lowercase letters as possibility for password
    var passwordLow = window.prompt("Would you like lower case letters?");
    if (passwordLow === "yes" || passwordLow === "y") {
        charPool += "abcdefghijklmnopqrstuvwyz";
    };
    //Include special characters as possibility for password
    var passwordSpecial = window.prompt("Would you like special characters?");
    if (passwordSpecial === "yes" || passwordSpecial === "y") {
        charPool += " !”#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    };
    //Include numbers as possibility for password
    var passwordNum = window.prompt("Would you like numbers?");
    if (passwordNum === "yes" || passwordNum === "y") {
        charPool += "0123456789";
    };
    //Create password given parameters from above
    var passwordTest = "";
    for (var i = 0; i < passwordLength; i++) {
        passwordTest += charPool.charAt(Math.floor(Math.random() * charPool.length)); //Source at bottom
    };
    return passwordTest;
    console.log("Pool of characters is " + charPool);
    console.log("Password length is " + passwordLength);
    console.log("Password is " + passwordTest);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(password);
}

generateBtn.addEventListener("click", writePassword);

// Source for passwordTest line at line 34: https://www.codegrepper.com/code-examples/javascript/select+random+character+from+string+javascript