//Create variables ---------------------------------------------------------

// Types of character to use
// Note: variable names deliberately "obscured" to prevent using reserved words. Also, I want to control which symbols are used to deter ones which might cause issues
const uCaseLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseLett = "abcdefghijklmnopqrstuvwxyz";
const numbs = "0123456789";
const symbs = "~!@#$%^&*()[]{}-+=|\<>?/";
// Assignment Code
var generateBtn = document.querySelector("#generate");


//Create Functions ---------------------------------------------------------

//Get Character Types to use ***********************
var promptTypeList = function () {
  //prompt for character types
  //Make an array with possible values [ uCaseLett lCaseLett numbs symbs ] 
  var charTypeList = [];
  var charChoiceList = ["uCaseLett", "lCaseLett", "numbs", "symbs"];
  var messageList = ["Uppercase (A...Z)", "Lowercase (a...z)", "Numbers (0...9)", "Symbols (!@#$...)"];
  var isCorrect = false;

  //Cycle through the prompts to choose character types
  for (var charChoice = 0; charChoice < charChoiceList.length; charChoice++) {
    isCorrect = false
    while (isCorrect != true) {
      var choice = window.prompt("Do you want " + messageList[charChoice] + "in your password?", "Y/N");
      choice = choice.toUpperCase();
      console.log(choice + "   " + charChoice);
      if (choice == "Y" || choice == "N") {
        isCorrect = true;
        if (choice == "Y") {
          charTypeList.push(charChoiceList[charChoice]);
          console.log(charTypeList);
        }
      } else {
        isCorrect = false;
        alert("Please check your answer");
      }
    }
  }
  return charTypeList
} //end promptTypeList()

//Prompt for password length ***********************
promptPasswordLength = function () {

  var isCorrect = false;
  while (isCorrect != true) {
    var passwordLengthAsk = window.prompt("How many characters do you want in your password?", "Enter a number between 8 and 128");
    if (passwordLengthAsk < 8 || passwordLengthAsk > 128 || isNaN(passwordLengthAsk)) {
      isCorrect = false;
      alert("Please check your answer");
    } else {
      isCorrect = true;
    }
  }
  return passwordLengthAsk;
} //end promptPasswordLength()


//function to create a list of what character types for each position ***********************
//we will do this structurally by putting in one of each type at the beginning and then randomising
//we will then randomise the position of the digits later
createCharTypeList = function(pwLength, pwChoiceArray) {
  var pwTypeArray = [];
  for (var len = 0; len < pwLength; len++) {
    if (len < pwChoiceArray.length) {
      pwTypeArray.push(pwChoiceArray[len]);
    } else {
      pwTypeArray.push(pwChoiceArray[Math.floor(Math.random() * pwChoiceArray.length)]);
      }
     }
     return pwTypeArray;
  }




//Generate a random character ***********************
// charcTypeChoice is a string of characters e.g "ABCDEF"
function generateRandChar(charcTypeChoice) {
  var numInList = charcTypeChoice.length;
  randNo = Math.floor(Math.random() * numInList);
  NewChar = charcTypeChoice.substring(randNo, randNo + 1);
  console.log(randNo);
  console.log(NewChar);
  return NewChar;
}

//function to generate the required amount of characters ***********************
//Make as an array so it can be further randomised
function createCharArray(charTypeArray) {
  var charArray = [];
  for (var i = 0; i < charTypeArray.length; i++) {
    charArray.push(generateRandChar(eval(charTypeArray[i])))
    }
    return charArray;
  }

var test=createCharArray(['uCaseLett', 'lCaseLett', 'numbs', 'symbs', 'lCaseLett', 'symbs','uCaseLett', 'symbs'])

//function to randomise the position of characters ***********************
function randString(charArray){
  randCharArray = [];
  while(charArray.length>0){
     x = Math.floor(Math.random() * charArray.length );
    randCharArray.push(charArray[x]);
  charArray.splice(x,1);
}
return randCharArray.join("");
}

//*** generatePassword() - This is the main function ************************
function generatePassword() {
  var PasswordLength = promptPasswordLength();
  var charTypeChoice = promptTypeList();
  var charTypeArray = createCharTypeList(PasswordLength, charTypeChoice) ;
  var charArray = createCharArray(charTypeArray) ;
var FinalPassword = randString(charArray) ;
  // console.log(PasswordLength)
  // console.log(charTypeArray);

  return charArray + "\n +++++\n " + FinalPassword;
}

// Write password to the #password input
function writePassword() {

  //create password by calling main function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} //end writePassword() ***********************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword);