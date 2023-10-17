/*
  Convert the given nujmber into a roman numeral

  All roman numerals answers should be provided in upper-case
*/

function convertToRoman(num) {
  let romanNumber = '';

  const romanNumeralsDictionary = {
    'M': 1000,
    'CM':	900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC':	90,
    'L': 50,
    'XL':	40,
    'X': 10,
    'IX':	9,
    'V':	5,
    'IV':	4,
    'I':	1
  };

  for (let romanNumberKey in romanNumeralsDictionary) {
      while (num >= romanNumeralsDictionary[romanNumberKey]) {
        romanNumber += romanNumberKey;
        num -= romanNumeralsDictionary[romanNumberKey];
      }
  }
  
  return romanNumber;
};

console.log(convertToRoman(84));
console.log(convertToRoman(102));
console.log(convertToRoman(2));
console.log(convertToRoman(2023));