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

- To setup everything by yourself, visit [NextJS without CRA](https://github.com/genzyy/NextJS-guide/blob/main/NextJS-without-CRA.md).

<br />

## Know the basics

<br />

| Differences                            |                                        ReactJS                                        |                                                NextJS                                                |
| :------------------------------------- | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| Type                                   |                                 This is a `Library`.                                  |                                        This is a `framework`.                                        |
| What it does?                          |       ReactJS does one thing and does it best which is to build UI components.        |          Its a collection of tools to give you a complete pack to build a full fledged app.          |
| Uses                                   |                Can be used to build any type of webpages (almost all).                |          Better for small and `static` webapps but are also very good for dynamic webapps.           |
| Routing                                |          For routing one uses the best package which is `react-router-dom`.           |                                   It has built-in routing system.                                    |
| Extending features and adding new ones | It is very easy to add more features, loaders, components, etc but with npm packages. | There are basic and common tools provided by the next package but can be extended with npm packages. |

<br />

## Typescript: Basics

<br />

- Read the typescript basics [here](https://github.com/genzyy/NextJS-guide/tree/main/typescript).

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

- So for fetching data from an API, we can go any of these 3 ways:

  - `getStaticProps`:

    - This is of type Static Generation.
    - This function gets run whenever we build our NextJS App.
    - Basically what it does is let's say we are building a webapp to show the details about all the characters from `Rick and Morty` show and for that we only need the data so making a dynamic website is of no use. We only need the data once and show it to the user. So what NextJS does is it fetches the data from the api, stores it and creates different pages for characters.
    - So it stores the data instead of fetching data for a character if the user visits that character page more than once. This makes navigating to different pages so fast that it feels like app is not even fetching data which is actually what NextJS is doing that is not fetching any data because it already stored it when we built the app.
    - Read more about this at [https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

  - `getStaticPaths`:

    - This is also of type Static Generation.
    - This is kind of an extended feature of `getStaticProps` and also seperating dynamic routes from statically rendered pages.
    - In this function we specify which `paths` are need to be statically pre-rendered during the build time.
    - For example, we have a character pages for RickAndMorty show and a page where we want to show some dynamic details about it. By dynamic we mean the data will change according to the viewing user or maybe the api gives different data per request. So now we can specify that all the character profile pages should be rendered statically at the build time.

  - `getServerSideProps`:
    - This is of type Server Side Rendering.
    - This is purely for dynamic paths or pages where we need to show different data on each request or each time the page renders.
    - In the above defination for getStaticPaths, we talked about a dynamic page rendering different data at each request right? So for these dynamic pages we can use `getServerSideProps`.
    - What this does is it fetches the data every time that path is visited. So let's say we have a page where we show how much time is left for the next Rick And Morty episode to get released or the latest news we get about Rick And Morty, we use this function to fetch and display the data.
