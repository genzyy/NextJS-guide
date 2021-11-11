import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Character, GetCharacterResults } from '../types';
import ImageLoader from '../utils/imageLoader';

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
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
                loader={ImageLoader}
                unoptimized
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
  );
};

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

// use getServerSideProps when we want a dynamic website.

export default Home;