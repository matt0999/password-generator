//global variables
const letters = ["A", "B", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specCharacters = ["+", "-", "!", "#", "$", "%", "&", "*", "="];
let masterArray = []; //the array that each variable above will be places
var  finalPassword = []; //the outcome of masterArray will be placed in this array

function getPwdLength(){
    let pwdLength = prompt("How many characters long will this password be? (must be between 8 and 128)");
   
    if( pwdLength == null ){
      
      alert("Are you sure you don't want a password?");
      return;
  
    }
      
    else if (pwdLength < 8 || pwdLength > 128) { 
      
      alert("Please select characters between 8 and 128"); //this will account for possible user errors
      getPwdLength();
  
    }
    
      if (pwdLength >= 8 || pwdLength <= 128){
  
       let upperCase = confirm("Will this password use upper case letters?");
        
        let lowerCase = confirm("Will this password use lower case Letters?");
        
       let number = confirm("Will this password have numbers?");
        
       let special = confirm("Will this password use special characters?");
        
       if (upperCase) {
       masterArray = masterArray.concat(letters)
      
       };
  
       if (lowerCase) {
       masterArray = masterArray.concat(lowLetters)
       };
  
       if (number) {
        masterArray = masterArray.concat(numbers)
       };
  
       if (special) {
        masterArray = masterArray.concat(specCharacters)
       };
       
  
       for (let index = 0; index < pwdLength; index++) {
        finalPassword.push (masterArray[Math.floor(Math.random() * masterArray.length)]);
        
       }
       console.log(finalPassword);
      }    
    };

    function generatePassword(){
        getPwdLength();
      return  finalPassword;
     }
     
     //.join()<- array method

     // Assignment Code
var generateBtn = document.querySelector("#generate"); //query slector is connected to the generate id in the html/css
generateBtn.addEventListener("click", writePassword);

//use prompt to save to variable
//have computer pick variables at random based on user's choice of arrays in their password

// Write password to the #password input
function writePassword() {  //button needs to connect to a confirm window and button needs to connect to function
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    finalPassword = [];
    masterArray = [];
  }
  
  // Add event listener to generate button
  //connect button functionality to html
  generateBtn.addEventListener("click", writePassword); //this will give the button an action
  
  //function of the button
  
  //[] == array
  //element() == method
  //elemnt{} == scopes