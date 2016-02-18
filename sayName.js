//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up
var john = new User("John Doe", 35);
var jane = new User("Jane Doe", 34);
var steve = new User("Steve Curd", 35);
  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function() {
  	alert(this.name);
  };