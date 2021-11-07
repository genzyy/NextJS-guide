<div align=center>
    <h1>The NextJS guide (with Typescript!)</h1>
</div>

## Know the basics

| Differences                            |                                        ReactJS                                        |                                                NextJS                                                |
| :------------------------------------- | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| Type                                   |                                  This is a `Library`                                  |                                        This is a `framework`                                         |
| What it does?                          |       ReactJS does one thing and does it best which is to build UI components.        |          Its a collection of tools to give you a complete pack to build a full fledged app.          |
| Uses                                   |                Can be used to build any type of webpages (almost all).                |          Better for small and `static` webapps but are also very good for dynamic webapps.           |
| Routing                                |          For routing one uses the best package which is `react-router-dom`.           |                                   It has built-in routing system.                                    |
| Extending features and adding new ones | It is very easy to add more features, loaders, components, etc but with npm packages. | There are basic and common tools provided by the next package but can be extended with npm packages. |

### Typescript: Basics

- For people who have used `C++` and `Python`, comparing `Javascript` and `Typescript` is very similar in terms of generics and literals. In javascript, we don't have to specify the variable type and generics. But in typescript, we can specify the types and generics of the variable, what the function returns and what the function type is.

- In a nutshell, while using javascript you can create your ways and the maze and figure your way out and while using typescript you already know what the way out is you just have to know the right direction.

- Also while working on a typescript project, we can also define `types` and `interfaces`.Now what are these interface and types? You see when we are in a typescript environment every object, variable, function, etc. has some pre defined structure which every part of the code follows or a contract that they must follow.

- For example, we have an object as `person`. This `person` object will have attributes as `name`, `age`, and `address`. Now when we use this object to get data about a specific person the project environment (typescript env) knows the structure of this person object and only allows the data to be retrieved from the object which are defined for it. So if we try to get `hobbies` attribute from `person` object we can't, because its not in the interface that we defined for the object.

- Not only objects and variables but everything has a predefined type or a structure in the typescript evnvironment. Even the `react hooks` and `custom components` that we create while working on a react project has a type to it.

- Now you might think that since everything needs to have an interface, do we manually have to defined them? No. While working with react library or with the next framework, a lot of these have a predefined types but we only need to specify them so that the env knows what type of value does the variable hold or what type of data a function returns.

- But for the data that we manually create or get from an `API`, we do need to define their interface.
