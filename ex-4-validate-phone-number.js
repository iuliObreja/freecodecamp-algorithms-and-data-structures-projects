/*
  Validate or reject the US phone number based on any combination of the formats 
  provided under. The area code is required. If the country code is provided, you 
  must confirm that the country code is 1. Return true if the string is a valid US 
  phone number; otherwise return false.

  -> 555-555-5555
  -> (555)555-5555
  -> (555) 555-5555
  -> 555 555 5555
  -> 5555555555
  -> 1 555 555 5555
*/

function telephoneCheck(str) {
  if (str.length >= 14 && str[0] > 1 || str[0] < 1) {
    return false;
  }
  
  str = str
    .split('')
    .map( elem => /[0-9]/.test(elem) ? elem = '5' : elem)
    .join('');

  switch(str) {
    case '555-555-5555':
    case '(555)555-5555':
    case '(555) 555-5555':
    case '555 555 5555':
    case '5555555555':
    case '5 555 555 5555':
    case '5 (555) 555-5555':
    case '5(555)555-5555':
    case '5 555 555-5555':
    case '5 555-555-5555':
      return true;
    default:
      return false;
  }
}

console.log(telephoneCheck("1 (455) 575-7935"));
console.log(telephoneCheck("(532) 377-5625"));
console.log(telephoneCheck("12345678910"));
console.log(telephoneCheck("2 (455) 575-7935"));
