/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. It refers to the global object
 * 2. The this keyword provides access to the properties of an object
 * 3. It can be used to reassign the value given to a property in an object
 * 4.It refers to an object which calls the function it contains.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
var student = {
  matriculationNumber: "0920919",
  grade: "Distinction",

  displayDetails: function(name) {
    console.log(name + " " + this.matriculationNumber + " " + this.grade);
  }
};
var myCarDetails = student.displayDetails.bind(student, "Ade");
myCarDetails(); // 0920919 Distinction

// Principle 2

// code example for Implicit Binding
const user = {
  name: "Tony",
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
user.greet();

// Principle 3

// code example for New Binding
function Animal(specie, sound, lifespan) {
  this.specie = specie;
  this.sound = sound;
  this.lifespan = lifespan;
}

var Dog = new Animal("Canidae", "bark", 10);
console.log(Dog.sound);

// Principle 4
function explicitBinding(language) {
  console.log(`my name is ${this.name} and I speak ${language}`);
}

var student = {
  name: "James"
};

explicitBinding.call(user, "English");
// code example for Explicit Binding
