const negate = a => { // the negate function should not return itself with a reassigned value, use a locally-scoped variable instead.
  let negate
  if(a === true) {
    negate = false;
  } else if(a === false) {
    negate = true;
  }
    return negate;

  // alternative solution - use ! operator to return the negate
  // return !a
};

const both = (a, b) => {
 if( a  === true && b === true) {
   return true;
 
 } else  {
   return false;
 }
};  

const either = (a, b) => {
  if(a === true || b === true) {
  return true;

} else {
  return false;
}

};


const none = (a, b) => {
  if(a !== true && b !== true) {
    return true;

  } else {
    return false;
  }
  
};

const one = (a, b) => { // simplified if statements
  if(a === b) {
   return false;
  }
    return true;
};
  



const truthiness = a => {
  if(a) {
    return true;
  }else  {
    return false;
  }
};
 

const isEqual = (a, b) => {
if(a === b) {
  return true;

}else {
  return false;
}

// Note: This and similar if-else statements can be simplified as
// return a === b
// This still returns a boolean result.
};

const isGreaterThan = (a, b) => {
  if(a > b) {
    return true;

  }else {
    return false;
  }

};

const isLessThanOrEqualTo = (a, b) => {
  if(a < b || a === b) {
    return true;

  }else {
    return false;
  }

};

const isOdd = a => {
  if(a % 2 === 1) {
    return true;

  } else { 
    return false;

  }
};

const isEven = a => {
  if(a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0 ;
  
};

const startsWith = (char, string) => {
  // Solution: this challenge requires using array index!
  if (string[0] === char) {
    return true;
} else {
  return false;
}
};

const  containsVowels = string => {
  if(string.match(/[aeiou]/gi)) {
    return true;
  } else {
    return false;
  }
};
  

const isLowerCase = string => {
return string === string.toLowerCase();
  
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
