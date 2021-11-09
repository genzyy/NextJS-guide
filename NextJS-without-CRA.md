<div>
    <h1>NextJS without CRA</h1>
</div>

- This is a guide to initialize a NextJS project without using create-react-app.

## Installing Dependencies

- We will install `next` and `react` modules,

```bash
    npm install next react react-dom
    # or
    yarn add next react react-dom
```

- Then setup typescript and for that we need these packages,

```bash
    npm install --save-dev typescript @types/react @types/node
    # or
    yarn add --dev typescript @types/react @types/node
```

## Creating Configs

- Now we need to create few configuration files for NextJS and Typescript.

- Create a file named `next.config.js` in the home folder of the project and add these lines,

```javascript
module.exports = {
  // use react strict mode while working
  // with react in NextJS.
  reactStrictMode: true
};
```

- Create `tsconfig.json` in project home folder and add these lines,

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- Now we need to create few directories in the home project folder. Create `pages` and `public` folders. And then create `pages/index.tsx` and `public/index.html` (this is not needed).

- Now in `index.tsx`, create a functional component of the name `Home`,

```tsx
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>New NextJS Project</title>
      </Head>
      <h1>First Heading</h1>
    </div>
  );
};
```

- Here the Home component is of type NextPage which tells NextJS that it can be compiled to a next page.

- Now in order to run the app or build, we have to add some scripts in `package.json`. Add the just above the `dependencies` section,

```json
"scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
```

- After all this, we can now compile and run the development server by running the command

```bash
  npm run dev
  # or
  yarn run dev
```

- The website is hosted at `localhost:3000`.

- Now for linting and syntax rules, we will use `eslint`.

Note: You can also use `prettier` or don't use linters at all.

- Create `.eslintrc.json` file in the root project folder and add the following,

```json
{
  "extends": "next/core-web-vitals"
}
```

- That's it! You can now work on your project with NextJS and Typescript

- For component files, create `.tsx` files and for typescript types, create `.ts` files.
