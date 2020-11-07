const createPerson = (name, age) => {
  return {
  name: name,
  age: age
  }

  // For objects which have properties with the same name as their value variables, you can use shorthand
  // { name, age } is the same as {name: name, age: age }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  // The solution: use brackets to access a property on an object by its name.
 return object[property];
};

const hasProperty = (property, object) => {
 return object.hasOwnProperty(property);
};

  
  



const isOver65 = person => {
return person.age > 65;
 

};

const getAges = people => {

 
const howOld = people.map(person => person.age); // use of const, camelCase, unique name for variable in the callback
  // Note: the variable in array callback is named in singular because you are iterating over the array one person at a time.

return howOld;
    
};

const findByName = (name, people) => {
  const names = people.find(person => person.name === name);

  return names;
};

const findHondas = cars => {
  const carsH = cars.filter(car => car.manufacturer === 'Honda'); // plural cars as an array of Hondas will be returned

  return carsH;
};

const averageAge = people => {
  var count = 0, sumAge = 0;
for (var key in people) {
 // if (people.hasOwnProperty(key)) {  // hasOwnProperty should only be used on objects, but people is an array
   if (people[key].hasOwnProperty("age")) {
     sumAge += people[key].age;
     count += 1;
   }
 // }
}
return sumAge/count;

// Alternative solution making use of array.reduce()

  // const totalNumberOfYears = people.reduce((years, person) => {
  //   return years + person.age;
  // }, 0);
  //
  // return totalNumberOfYears / people.length;
};

const createTalkingPerson = (name, age) => {

  return {
    name: name,
    age: age,
 introduce: function (greeTing) {

  return 'Hi ' + greeTing + ', my name is ' + this.name + ' and I am ' + this.age + '!';

}
};
};


module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
