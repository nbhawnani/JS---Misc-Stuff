// try catch finally - error handling
/*
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
*/

function myFunction() {

  let x = "11";
  try { 
    
    if(x == "") throw "empty";
    x = Number(x);
    if(isNaN(x)) throw "not a number";
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log( "Input is " + x + ":" + err);
  }
  finally{
    document.write ( "This is an example of error handling");
  }
}

myFunction();


// JS Classes
/*
A JavaScript class is not an object.
It is a template for JavaScript objects.
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
*/
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  fruitSentence(){
    return("I have a fruit which is "+ this.name + " and it is " + this.color + " in color.")
  }
}
let Fruit1 = new Fruit("Mango", "yellow");
document.write("<p>"+Fruit1.fruitSentence()+"</p>");
console.log(Fruit1);


// JSON
/*
JSON is a format for storing and transporting data.
JSON stands for JavaScript Object Notation
JSON is language independent 
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

JSON names require double quotes. JavaScript names do not.

*/

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj.employees[0]);

const strObj = JSON.stringify(obj)
console.log(strObj);







