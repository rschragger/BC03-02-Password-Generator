//Create variables
const UCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const LCaseList = "abcdefghijklmnopqrstuvwxyz" ;
const NumbsList = "0123456789" ;
const SymbsList = "~!@#$%^&*()[]{}-+=|\<>?/" ;

var CharcTypes = {
  UCaseLett : true ,
  LCaseLett : true ,
  Numbs : true ,
  Symbs : true ,
};


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Get Character Types to use

//Generate a random character
function generateRandChar (CharcTypeChoice){
  var numInList = CharcTypeChoice.length ;
  randNo = Math.floor ( Math.random() * numInList ) ;
  NewChar = CharcTypeChoice.substring(randNo,randNo+1);
  console.log (randNo) ;
  console.log (NewChar) ;
  return NewChar ;
  }


//***This is the maths function */
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

