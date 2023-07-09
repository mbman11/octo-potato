
// start

var characterLength = 8;
var randomArray = [];
var special = ['!','@','#','$','%','^','&','*','(',')',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numbers = ['1','2','3','4','5','6','7','8','9','0',];

  // Assignment code here
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var correctPrompts = getPrompts();
   var passwordText = document.querySelector("#password");
   if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  
    } else {
      passwordText.value = '';

    }
   }



function generatePassword() {
  var password = '';
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * randomArray.length)
    password = password + randomArray[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
  
  characterLength = parseInt(prompt('how many characters would you like to have?(atleast 8 up to 128 characters)'));

  if((!characterLength)) {
    alert('Password needs to be at least 8 characters and no greater than 128 characters, and user input has to be a number.');
    return false;
  }
  if (confirm("Would you like lowercase characters in your password?")) {
    randomArray = randomArray.concat(lowerCase);
  }
  if (confirm("Would you like uppercase characters in your password?")) {
    randomArray = randomArray.concat(upperCase);
  }
  if (confirm("Would you like numeric characters in your password?")) {
    randomArray = randomArray.concat(numbers);
  }
  if (confirm("Would you like special characters in your password?")) {
    randomArray = randomArray.concat(special);
  }
  return true;
}
