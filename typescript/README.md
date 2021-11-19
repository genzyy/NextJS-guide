<div align=center>
    <h1>Typescript Guide</h1>
</div>

## What is Typescript?

- Typescript is a language created by a team from Microsoft.
- Typescript is a language similar to javascript but is more strict and tells the developer or debugger everything about the code.
- It has better type definations, generics and other rules when defining certain blocks of code.

- For people who have used `C++` and `Python`, comparing `Javascript` and `Typescript` is very similar in terms of generics and literals. In javascript, we don't have to specify the variable type and generics. But in typescript, we can specify the types and generics of the variable, what the function returns and what the function type is.

- In a nutshell, while using javascript you can create your ways in a maze and figure your way out and while using typescript you already know the way out, you just have to know the right direction.

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

- We can also declare functions which are then defined in the class, or the component which follows the interface in the project directory. To add function declarations in typescript interface, see this example

```typescript
interface User {
  name: string;
  age: number;
  giveName(): string;
}
```

- We declare a function in interface, by giving the function a name and stating its return type. And then whatever class or component implements this interface, needs to define the function (if its a class) or pass it as an argument (if its a component).

`NOTE: Don't worry about the interface and its use in React Typescript. I will be creating a tutorial on this.`

- Lets look at the example of how a class in typescript implements the interface:

```typescript
interface User {
  name: string;
  age: number;
  giveName(): string;
}

class UserDetails implements User {
  public name: string = 'Rishit';
  public age: number = 21;

  public giveName(): string {
    return this.name;
  }
}
```

- Don't feel left alone if you don't know some keywords or any of them. We will cover all of this soon.

- And now this is an example of use of interfaces in react,

```typescript
import React, { useState } from 'react';

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div>{children({ count, setCount })}</div>;
};
```

- In the above code example, the interfaces are being used as to structure the props or to tell the parent component what details are exactly need to be passed to the child component. Also here we also define the return type of variables and functions that are being passed to the component as props. So this helps in type checking and if the correct data is being passsed or not.

## `tsconfig.json`

- While working on a project where typescript is being used, we define some rules for the environment. For example whether to compile the code to `ES5` or `ES6`, can the developer use javascript inside typescript files, etc.

- So to define these rules we create `tsconfig.json` file in the home directory of the project.

- It can also be said that this is the configuration for the typescript compiler.

```json
{
  "compilerOptions": {
    // target for build files.
    "target": "es5",
    // libraries to use.
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    // resolve modules using node.
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  // include these directories.
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  // exclude these directories.
  "exclude": ["node_modules"]
}
```

- The above code in json is an example of a typescript configuration for `NextJS` project.
- I'll suggest to visit [this](https://github.com/benawad/tsconfig.json) repository and have a look at all [types](https://github.com/benawad/tsconfig.json/tree/master/src/config) of tsconfigs for different use cases.

- Also you can read more about the rules at [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
