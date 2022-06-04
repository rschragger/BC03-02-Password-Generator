// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  y= "Y" ;
  return y ;
}

// Write password to the #password input
function writePassword() {
  //Prompt for password length
  //prompt for character types
  
  
  //create password
  var password = generatePassword();
  console.log (password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", writePassword);

