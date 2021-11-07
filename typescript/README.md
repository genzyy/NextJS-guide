<div align=center>
    <h1>Typescript Guide</h1>
</div>

## What is Typescript?

- Typescript is a language created by a team from Microsoft.
- Typescript is a language similar to javascript but is more strict and tells the developer or debugger everything about the code.
- It has better type definations, generics and other rules when defining certain blocks of code.

## Defining variables

- When defining variables in typescript, we also define the type of value which it holds. For example in JS, we only write,

```javascript
const name = 'genzyy';
```

but when defining the same in typescript, it is written as

```typescript
const name: string = 'genzyy';
```

- This is similar for all types of variables that can be defined in both JS and TS let it be a `let` variable or a `const`.

- Assigning a `x` type of value to a variable which was supposed to hold a value of a `y` type will give an error saying that the variable doesn't hold the correct value.

## Functions In TS

- Functions are similar to how variables are different in TS and JS.

- Here we also define the type of arguments passed to the function (if there are any) and the value returned by the function.

- For example an es5 function looks like,

```typescript
function SayHello(name: string): string {
  return arg;
}
```

- So if we see the above code block we define the type of value returned by the function after the function parenthesis and type of arguments inside the parenthesis.

- And an es6 functions is defined as,

```typescript
const SayHello = (arg: string): string => {
  return arg;
};
```

## Interfaces In TS

- Interface in typescript refers to a contract or a structure which should be followed by the objects, variables and other code entities created by the developer in the typescript project.
- Interfaces helps in figuring out what every variable and function holds or returns upon its execution.
- It also makes it easy to debug the code base.

- For example if we want to create a user object and define it as a type, we can do

```typescript
interface User {
  name: string;
  age: number;
}

const createPerson = (name: string, age: number): User => {
  const newUser: User = {
    name: name,
    age: age
  };
  return newUser;
};

const person1: User = createPerson('genzyy', 0);
```

- These interface types are defined in `types.ts` file located in the root directory of the project. Also to use these in your projects and make them available globally in the project folder, we export all the interfaces.
