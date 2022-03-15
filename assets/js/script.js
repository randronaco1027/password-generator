//Create Password function
function generatePassword() {
    var passwordLength = parseInt(prompt("Please enter desired password length"));
    //Establish how long password will be (min 8 characters, max 128 characters)
    while (passwordLength < 8 || passwordLength > 128) { 
        passwordLength = parseInt(prompt("Password must be between 8 and 128 characters"));
    };
    var charPool = "";
    //Include capital letters as possibility for password
    var passwordCap = window.confirm("Would you like capital letters?");
    if (passwordCap == true) {
        charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    //Include lowercase letters as possibility for password
    var passwordLow = window.confirm("Would you like lower case letters?");
    if (passwordLow == true) {
        charPool += "abcdefghijklmnopqrstuvwyz";
    };
    //Include special characters as possibility for password
    var passwordSpecial = window.confirm("Would you like special characters?");
    if (passwordSpecial == true) {
        charPool += " !”#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    };
    //Include numbers as possibility for password
    var passwordNum = window.confirm("Would you like numbers?");
    if (passwordNum == true) {
        charPool += "0123456789";
    };
    //Alert user they must provide at least one parameter
    if (passwordCap == false && passwordLow == false && passwordSpecial == false && passwordNum == false) {
        window.alert("Must select at least one type of character to be used!");
    }
    //Create password given parameters from above
    var passwordTest = "";
    for (var i = 0; i < passwordLength; i++) {
        passwordTest += charPool.charAt(Math.floor(Math.random() * charPool.length)); //Source at bottom
    };
    return passwordTest;
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