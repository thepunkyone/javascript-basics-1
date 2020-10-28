const { startsWith } = require("./booleans");

const getNthElement = (index, array) => {
  while( index >= array.length) {
    return array[index - array.length];
  }
  
    
  return array[index];
  
};

const arrayToCSVString = array => {
   let New = array.join();
  {
    return New;
  }
};

const csvStringToArray = string => {
  let Splt =  string.split(",");
  {
    return Splt;
  }

};

const addToArray = (element, array) => {
array.push(element);


};

const addToArray2 = (element, array) => {
 let array2 = array.concat(element);
 {
 return array2;
}
 

 
};

const removeNthElement = (index, array) => {
   return array.splice(index,1);
  
};

let numbersToStrings = numbers => {
  return numbers.map(String);
  
  
};

let  uppercaseWordsInArray = strings => {
  let Up = strings.map(index => index.toUpperCase());
  {
    return Up;
  }
};

const reverseWordsInArray = strings => {
    return strings.map(string => string.split("").reverse().join(""));
    
  
};

const onlyEven = numbers => {
  let even = numbers.filter((item) => item % 2 === 0);
  {
    return even;
  }
  
  
};

const removeNthElement2 = (index, array) => {
  let Secondarray = [...array];
  
  Secondarray.splice(2,1);
  {
    return Secondarray;
  }

};

let elementsStartingWithAVowel = strings => {

 
  let rex = /^[aeiou]/i;
  let results = strings.filter(strings => rex.test(strings));
  {
    return results;
  }
    
  

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
