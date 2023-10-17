/*
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a 
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/

function decodeCaesarsCipher(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  return str
    .toUpperCase()
    .split('')
    .map( char => {
      for (let letter of alphabet) {
        if (/[A-M]/.test(char) && char === letter) {
          return char = alphabet[alphabet.indexOf(letter) + 13];
        } else if (/[N-Z]/.test(char) && char === letter) {
          return char = alphabet[alphabet.indexOf(letter) - 13];
        } else if (/[^A-Z]/.test(char)) {
          return char;
        }
      }
    })
    .join('');
};

console.log(decodeCaesarsCipher('SERR CVMMN!'))