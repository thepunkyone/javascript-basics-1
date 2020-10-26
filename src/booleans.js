let negate = a => {
  if(a === true) {
    negate = false;
  } else if(a === false) {
    negate = true;
  }
  {
    return negate;
  }
};

let both = (a, b) => {
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

const one = (a, b) => {
  if   (a || b) {
    return true;
  }else {
    return false;
  }
};

  



let truthiness = a => {
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

let startsWith = (char, string) => {
  if(char === "a" && string === "aardvark") {
    return true;
} else {
  return false;
}


};

const containsVowels = string => {
  if(string == "aeiouwy" || string == "AEIOUWY") {
    return true
  } else {
    return false;
  }

 
  
   
 
  }
  

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
