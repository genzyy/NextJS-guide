<div align=center>
    <h1>Rick And Morty project</h1>
</div>

# About the project

- This project uses rick and morty api to showcase the working of NextJS and Typescript together.

- This is just a beginner project where you can learn about `Static Generation` functions of NextJS and how they work, use of typescript in NextJS.

- Creating Types in typescript for objects and retrieved data from rick and morty api.

- Using custom domains for fetching images from the given api and whitelisting them for NextJS.

## Rick And Morty API

- View the homepage at [https://rickandmortyapi.com/](https://rickandmortyapi.com/)

- And the documentation here: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation).

## Setting up project folder

- You can either setup the project folder from scratch for which you can refer [this](https://github.com/genzyy/NextJS-guide/blob/main/NextJS-without-CRA.md), or you can set it up using `yarn` or `npx` (if you have `nodejs` and `npm` installed, then you will also have npx installed),

```bash
    yarn create next-app <project-name> --typescript
    # or
    npx create next-app <project-name> --typescript
```

## Installing dependencies and Running the app

- After installing the base template, we need to install the dependencies which are npm packages. So to install these run

```bash
    npm install
    # or
    yarn install
```

- After installing dependencies, we can now run our app with the command `npm run dev` or `yarn run dev` which runs the development server on `localhost:3000`.

### Refactoring `index.js`

- We will remove everything that is being returned by the `Home` component in `index.js` file.

- And replace it with this code.

```html
<div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          fontWeight: 'bold'
        }}
      >
        {characters.map(character => {
          return (
            <div key={character.id}>
              <Image
                src={character.image}
                alt={character.name}
                width='200'
                height='200'
              />
              <h3>{character.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
```

- You see here we are using the Head tag to give a different title and meta description for the current page. This is provided by the next packages which are `next/head`.

- After replacing the html content of what the function returns, we need to create a function in `index.js` which will fetch the API data from the website.

- Now as we have seen in the previous section, there are three ways of getting the data based on how our webapp is going to work. We can say that since we are just fetching the data from an API, we are creating the data but we are not changing it.

- We don't change the data even after the rendering so that makes us confident in saying our webapp is a static webapp which is very good for us in terms of speed of the webapp.

- Since our app is a static website, we will use `getStaticProps` because that's that fastest way to get the data for a static webapp. Read more about it [here](https://github.com/genzyy/NextJS-guide#data-fetching).

- For creating the function, we need to import `GetStaticProps` type from `next` package. What we are doing here is telling NextJS that we have defined our own getStaticProps function of type GetStaticProps so that it runs our custom function. Or we can say that we extended the `GetStaticProps` type from next.

- Import the type `GetStaticProps` from `next` package,

```typescript
import type { GetStaticProps } from 'next';
```

- Below the `Home` function, we will create this getStaticProps function

```typescript
export const getStaticProps: GetStaticProps = async context => {
  // runs when the app is building.
  const apiURL: string = 'https://rickandmortyapi.com/api/character';
  const response: any = await fetch(apiURL);
  const { results }: GetCharacterResults = await response.json();

  return {
    props: {
      characters: results
    }
  };
};
```

- Now see that here we have used a custom types, `GetCharacterResults`. We will also use a `character` type to create an object for different characters from Rick And Morty.

- We can create typescript types with the given JSON data without actually knowing what the data is. What I mean is creating different object types is a lot of work when you have a large data or when the data is nested and complex. To automate this process, we can go to [https://quicktype.io/typescript](https://quicktype.io/typescript), and paste your JSON data there. This will create the types required to save the data.

- First use any app like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) or even [cURL](https://curl.se/) to get the json data from the api [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character). Then copy the data and go to [https://quicktype.io/typescript](https://quicktype.io/typescript) and select typescript on right box. Now paste the json data we got before in the left input box and on top left there will an input field for the naming the data, name the data as `Info`.

- Then we will copy the generated types to `types.ts` that we have to create in project root folder.

- We also need to create our own types for characters and to assign the retrieved data from the api.

```typescript
export interface GetCharacterResults {
  info: Info;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
```

- `NOTE`: Here we see that there are two types of string in typescript one is 'String' and other is 'string'. Now the 'String' type (with S in caps) is a javascript string object whereas string(with small s) is a typescript type. And 'String' (with S in caps) is a wrapper object and the latter one is a type.