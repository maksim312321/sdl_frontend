import RandomManager from './RandomManager.js';
// Functions for generating random number lowercase uppercase letters , symbols

/* Math.random method genrate a random floating-point numbers
Math.floor() function returns the largest integer less than or equal to a given number.
For generating a random uppercase lowercase text random numbers symbols we use Charcode
http://stevehardie.com/2009/09/character-code-list-char-code/ */

// adding a all functions into a object called randomFunc
const randomFunc = {
  lower: RandomManager.getRandomLower,
  upper: RandomManager.getRandomUpper,
  number: RandomManager.getRandomNumber,
  symbol: RandomManager.getRandomSymbol,
};

// adding a click event listner to generate button
const generate = document.getElementById('generateBtn');
generate.addEventListener('click', () => {
  const length = document.getElementById('Passwordlength').value;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasLower = document.getElementById('lowercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;
  const result = document.getElementById('PasswordResult');
  // function for generating random password
  // eslint-disable-next-line no-shadow
  function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    // filter out unchecked types
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0],
    );
    // console.log(typesArr);

    // creating a loop for calling generator function for each type
    for (let i = 0; i < length; i += typesCount) {
      // eslint-disable-next-line no-loop-func
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    // slicing password from 0 to length
    return generatedPassword.slice(0, length);
  }
  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length,
  );
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

// copy to clipboard
const button = document.getElementById('clipboardBtn');
// add click event listner on button
button.addEventListener('click', (e) => {
  e.preventDefault();
  // execute command for copy text by selecting textarea text with id
  document.execCommand(
    'copy',
    false,
    document.getElementById('PasswordResult').select(),
  );
});
