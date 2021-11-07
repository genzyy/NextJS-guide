<div align=center>
    <h1>The NextJS guide (with Typescript!)</h1>
</div>
<br />

## Creating NextJS project with typescript

- There are two ways to create a nextJS project, one in which we use a template where everything is setup and is in sync with each other and is the recommended one for beginners and the other one is to set up everything from scratch and manually.

- Using `npx` and with NextJS template,

```bash
    yarn create next-app <project-name> --typescript
    # or
    npx create next-app <project-name> --typescript
```

<br />

- To setup everything by yourself,

```bash
    npm install next react react-dom
    # or
    yarn add next react react-domain
```

- note: here I need to add more details, I'll do it soon.

<br />

## Know the basics

<br />

| Differences                            |                                        ReactJS                                        |                                                NextJS                                                |
| :------------------------------------- | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| Type                                   |                                  This is a `Library`                                  |                                        This is a `framework`                                         |
| What it does?                          |       ReactJS does one thing and does it best which is to build UI components.        |          Its a collection of tools to give you a complete pack to build a full fledged app.          |
| Uses                                   |                Can be used to build any type of webpages (almost all).                |          Better for small and `static` webapps but are also very good for dynamic webapps.           |
| Routing                                |          For routing one uses the best package which is `react-router-dom`.           |                                   It has built-in routing system.                                    |
| Extending features and adding new ones | It is very easy to add more features, loaders, components, etc but with npm packages. | There are basic and common tools provided by the next package but can be extended with npm packages. |

<br />

## Typescript: Basics

<br />

- For people who have used `C++` and `Python`, comparing `Javascript` and `Typescript` is very similar in terms of generics and literals. In javascript, we don't have to specify the variable type and generics. But in typescript, we can specify the types and generics of the variable, what the function returns and what the function type is.

- In a nutshell, while using javascript you can create your ways and the maze and figure your way out and while using typescript you already know what the way out is you just have to know the right direction.

- Also while working on a typescript project, we can also define `types` and `interfaces`.Now what are these interface and types? You see when we are in a typescript environment every object, variable, function, etc. has some pre defined structure which every part of the code follows or a contract that they must follow.

- For example, we have an object as `person`. This `person` object will have attributes as `name`, `age`, and `address`. Now when we use this object to get data about a specific person the project environment (typescript env) knows the structure of this person object and only allows the data to be retrieved from the object which are defined for it. So if we try to get `hobbies` attribute from `person` object we can't, because its not in the interface that we defined for the object.

- Not only objects and variables but everything has a predefined type or a structure in the typescript evnvironment. Even the `react hooks` and `custom components` that we create while working on a react project has a type to it.

- Now you might think that since everything needs to have an interface, do we manually have to defined them? No. While working with react library or with the next framework, a lot of these have a predefined types but we only need to specify them so that the env knows what type of value does the variable hold or what type of data a function returns.

- But for the data that we manually create or get from an `API`, we do need to define their interface.

- In a typescript project, we also define some rules for the TS env using `tsconfig.json`. There are many rules that we can define for our project. I'll suggest to visit [this](https://github.com/benawad/tsconfig.json) repository and have a look at all [types](https://github.com/benawad/tsconfig.json/tree/master/src/config) of tsconfigs for different use cases.

- If you want to learn more about typescript, visit [typescript docs](https://www.typescriptlang.org/docs/).

<br />

## NextJS

<br />

#### Getting Started

<hr />

- The NextJS frameworks combines routing, react library, image optimization, secure api calls and a faster page rendering.

- NextJS specializes in pre-rendering pages and reducing the loading time to present the website or data faster on the web.

- Since NextJS is from vercel, deploying our production build to vercel is much easier and takes few clicks to make our website available on the web.

<br />

#### Next Components (or NextJS API)

<hr />

- NextJS provides some of the common components that a react developer requires to build a website. For example, we need head component to change the `meta` details or changing the title of the page where each of them have a different title.

- It also provides the image component where you can give the `width` and `height` properties to the image without defining custom inline css styles for the component. Using `next/image` (NextJS image component), it also makes the api calls for image urls more secure by defining all the domains which are whitelisted to get the images from. So let's say I whitelisted only [cloudinary](https://cloudinary.com/), then I cannot render an image from a url which has a different domain than cloudinary.

- I'll be honest and say that the documentation that NextJS provides on their components/api is the best and rather than writing small points about those I'll suggest to read the official documentation at [https://nextjs.org/docs/api-reference/cli](https://nextjs.org/docs/api-reference/cli).

<br />

#### Data Fetching

<hr />

- This section about NextJS is the most important and the most fascinating thing about it.

- Coming Soon...
