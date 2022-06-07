//Create variables

// Types of character to use
// Note: variable names deliberately "obscured" to prevent using reserved words. Also, I want to control which symbols are used to deter ones which might cause issues
const uCaseLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseLett = "abcdefghijklmnopqrstuvwxyz";
const numbs = "0123456789";
const symbs = "~!@#$%^&*()[]{}-+=|\<>?/";



//Get choices of which characters to use ****
function charcTypeList() {
  ; //this will be an array of the above constants names
  var charcTypes = [] ;
  var charChoiceList = [ "useUCase", "useLCase", "useNumb", "useSymb"] ;
  var constList = [ "uCaseLett", "lCaseLett" , "numbs" , "symbs"] ;

  for (choiceCount = 0; choiceCount < charChoiceList.length; choiceCount++ ) {
    var caseChoice = document.getElementById(charChoiceList[choiceCount]);
    //console.log(constList[choiceCount] + "///" + caseChoice.checked);
    if (caseChoice.checked = true) {
     charcTypes.push(constList[choiceCount]); //we want the string added
     //console.log(charcTypes)
    }
  }
  return charcTypes ;
}  //****end function choices of which characters to use

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Get Character Types to use

//Generate a random character
// charcTypeChoice is a string of characters e.g "ABCDEF"
function generateRandChar(charcTypeChoice) {
  var numInList = charcTypeChoice.length;
  randNo = Math.floor(Math.random() * numInList);
  NewChar = charcTypeChoice.substring(randNo, randNo + 1);
  console.log(randNo);
  console.log(NewChar);
  return NewChar;
}


//***This is the maths function */
function generatePassword() {
  charcTypeList()
console.log("charcTypes: " + charcTypeList())
  y = "Y";
  return y;
}

// Write password to the #password input
function writePassword() {
  //Prompt for password length
  //prompt for character types



  //create password
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", writePassword);

