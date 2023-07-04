// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//this function if for when you click the button
function generatePassword () {
  console.log (Math.random()); 


  
  return "generated password will go here.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

//below is for the generate button when you click it
generateBtn.addEventListener("click", writePassword);