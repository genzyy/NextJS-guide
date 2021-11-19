# Javascript: Closures

- Closures are similar to what lexical scoping in a function does. It makes the function to save the value of a global variable
  (with respect to the inner function) without needing to execute the outer function again.

## Lexical Scoping

```javascript
function init() {
  let name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

- In the above function, the variable name is available to the `displayName` function which is inside `init` function.

- When we want to execute `displayName()`, we need to execute init() and then it declares a variable name for the displayName function. So there are two function executed where we wanted just one result.

## Closures

- To solve this, we need to return the actual function which is important for us and hence we use javascript closures.

```javascript
function makeFunc() {
  let name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

- So here we take the details available to use and keep it with us until the operation is ordered to execute. In this way, we minimize the number of executions.

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

- Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.
