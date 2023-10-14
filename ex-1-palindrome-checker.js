/*
  Return true if the given string is a palindrome. Otherwise, return false.

  A palindrome is a word or sentence that's spelled the same way both 
    forward and backward, ignoring punctuation, case, and spacing.
*/

function isPalindrome(str) {
  const justCharStr = str.split(/[^a-zA-Z0-9]/).join('').toLowerCase().split('');

  if (justCharStr.length % 2 !== 0) {
    justCharStr.splice(justCharStr.length / 2, 1);
  }
  
  const firstHalf = justCharStr.slice(0, justCharStr.length / 2).join('');
  const secondHalf = justCharStr.slice(justCharStr.length / 2).reverse().join('');
  
  return firstHalf === secondHalf;
};

console.log(isPalindrome("My age_ is 0, 0 si ega_@! ym."));
console.log(isPalindrome("_eye"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("almostomla"));
console.log(isPalindrome("1 eye for of 1 eye."));