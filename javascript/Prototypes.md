# Javascript: Prototypes

- Prototypes in javascript are basically OOPs but with functions. To be honest this defination makes it a little complex because OOPs use classes and prototypes use functions. But what these do is that they define templates for creating objects using functions, to which when we pass the required parameters it will create an object with those details.

- One of the things that should be highlighted here is that the template function or prototype is not connected to the object after its creation.

```javascript
function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;

  const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

  let person2 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
}
```

- JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

- An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

- In JavaScript, a link is made between the object instance and its prototype (its **proto** property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.
