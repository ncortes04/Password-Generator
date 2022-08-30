// Assignment Code
var generateBtn = document.querySelector("#generate");
const password1 = document.getElementById('#password')
stringamt = (9)
numamt = (5)
specialamt = (8) 
// Write password to the #password input
function passstring() {
  var length = (stringamt);
  var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var password = "";
  var character = "";
while(password.length<length) {
    entity1 = Math.ceil(string.length * Math.random() * Math.random())
    hold = string.charAt( entity1 );
    character += hold;
    password = character;
 }
 return password;
}
console.log(passstring())

function passnum() {
    var length = (numamt);
    var number = '0123456789';
    var password = "";
    var character = "";
  while(password.length<length) {
      entity2 = Math.ceil(number.length * Math.random() * Math.random())
      hold = number.charAt( entity2 );
      character += hold;
      password = character;
   }
   return password;
  }
  console.log(passnum())
  function passspecial() {
    var length = (specialamt);
    var special = "!@#$%^&*\|[]{};'.<>/";
    var password = "";
    var character = "";
  while(password.length<length) {
      entity3 = Math.ceil(special.length * Math.random() * Math.random())
      hold = special.charAt( entity3 );
      character += hold;
      password = character;
   }
   password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
   return password;
  }
console.log(passspecial())
var password = (passnum() + passspecial() + passstring())
password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", passnum);
