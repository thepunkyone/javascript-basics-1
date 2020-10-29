let createPerson = (name, age) => {
  return {
  name: name,
  age: age
  
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
 return object.age;
};

const hasProperty = (property, object) => {
 return object.hasOwnProperty(property);
};

  
  



const isOver65 = person => {
return person.age > 65;
 

};

const getAges = people => {

 
let HowOld = people.map(people => people.age);

return HowOld;
    
};

const findByName = (name, people) => {
  let names = people.find(people => people.name === name);

  return names;
};

const findHondas = cars => {
  let carH = cars.filter(cars => cars.manufacturer === 'Honda');

  return carH;
};

const averageAge = people => {
  var count = 0, sumAge = 0;
for (var key in people) {
 if (people.hasOwnProperty(key)) {
   if (people[key].hasOwnProperty("age")) {
     sumAge += people[key].age;
     count += 1;
   }
 }
}
return sumAge/count; 







  
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
