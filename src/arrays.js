const { startsWith } = require("./booleans");

const getNthElement = (index, array) => {
  if( index >= array.length) { // The while loop is not required here, simplify with an if statement.
    return array[index - array.length]; // Bonus points: consider an edge case where index is several times the array length.
  }
  
    
  return array[index];
  
};

const arrayToCSVString = array => {
   let New = array.join(); // Should use 'const' here as the variable is never re-assigned a new value. JS variable names should use camelCase.
  {                       // It is not necessary to wrap the return in curly braces.
    return New;
  }
};

const csvStringToArray = string => {
  return string.split(","); // return statements can be simplified like this, you don't always need to assign the result to a variable.
};

const addToArray = (element, array) => {
array.push(element);


};

const addToArray2 = (element, array) => {
 const array2 = array.concat(element);

 return array2;
};

const removeNthElement = (index, array) => {
   return array.splice(index,1);
  
};

const numbersToStrings = numbers => { // use const for functions
  return numbers.map(String);
  
  
};

const uppercaseWordsInArray = strings => {
  const up = strings.map(index => index.toUpperCase());

    return up;

};

const reverseWordsInArray = strings => {
    return strings.map(string => string.split("").reverse().join(""));
    
  
};

const onlyEven = numbers => {
  const even = numbers.filter((item) => item % 2 === 0);

    return even;

  
  
};

const removeNthElement2 = (index, array) => {
  const secondArray = [...array];
  
  secondArray.splice(2,1);

    return secondArray;

};

const elementsStartingWithAVowel = strings => {

 
  const rex = /^[aeiou]/i;
  const results = strings.filter(string => rex.test(string)); // in the array method callback the variable should have a different name
                                                                // from the other variables you use in the upper scope.

    return results;
    
  

};

const removeSpaces = string => {

  return string.replace(/\s+/g, '');
 
  
};

const sumNumbers = numbers => {

return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}


const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
