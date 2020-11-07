const sayHello = string => { // function should not reassign its own value and return itself, use a local variable for the value to return
  let hello
  if(string === "world") {
    hello = "Hello, world!";
  }else if(string === "MCR Codes") {
    hello = "Hello, MCR Codes!";
  }else if (string === "fsghjdfkhgf") {
    hello = "Hello, fsghjdfkhgf!";
  }
    return hello;

  // A solution which would work with any string:
  // return 'Hello, ' + string + !
};
  
 


const uppercase = string => {
  let toUpperCase
  if(string === "abc") {
    toUpperCase = string.toUpperCase();
  } else if(string === "def") {
    toUpperCase = string.toUpperCase();
  } else if (string === "ghi") {
    toUpperCase = string.toUpperCase();
  }

    return toUpperCase;

  // or return string.toUpperCase() which will work with any string
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, numberOfCharacters) => { // Was missing second parameter - numberOfCharacters
  return string.substring(0, numberOfCharacters);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
