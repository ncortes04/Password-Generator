var characterAmountRange = document.getElementById('passAmountSlider')
var characterAmountNumber = document.getElementById('passAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var endpass = document.getElementById('endpass')

/* This submit buttons calls and changes the value every time the button is pressed. As you can see these variables check if the check boxes are selected and what the value of character amount is. These variables then called in the password variable that has a function that randomly sorts that characters within the numbers, letters, and symbols. */
form.addEventListener('submit', function(event){
  event.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  endpass.innerText = password
})
/* These varibles are vey intersting yet crucial for my password generator.I originally typed out each letter, number, and symbol but found an easier method of using the ASCII character chart and called the characters by thier deciaml value*/
/* The uppercaseCodes variable created an array that grabs the letters 65-90 which is A-Z including all the 24 letters in between*/
var uppercaseCodes = arrayFromLowToHigh(65, 90)
/* The lowercaseCodes value creates an array that grabs the letters 97-122 which is a-z in lowercase; including all the 24 letters in between*/
var lowercaseCodes = arrayFromLowToHigh(97, 122)
/* The numberCodes value creates an array that grabs the numbers 48-57 which is just 0-9*/
var numberCodes = arrayFromLowToHigh(48, 57)
/* The symbolCodes value creates an array that grabs the symbols (33-47), (58-64), (91-96), and (123-126) which is various different symbols within the ASCII chart and all combined with .concat*/
var symbolCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
/* these are add event listeners for inputs that */
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

/* the generate oaswird variable sets the default password to be lowercase. The iff statments say if the  Include Uppercase or Include Numbers orInclude Symbols ar checked combine them (.concat) with the lowercase code. If multiple are pressed then combine them too
*/
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  var charCodes = lowercaseCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCodes)
  /* variable paswordCharacters runs a for loop that grabs the previous charCodes variable and randomly assorts then within the selected value criteria*/
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
/* This function is called above that sepcifies the characters within are an array and should be sorted from low to high */
function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
/* This functions grabs the users target value for the character slider and is being called in thecharacter ammount number as well as range */
function syncCharacterAmount(event) {
  var value = event.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
