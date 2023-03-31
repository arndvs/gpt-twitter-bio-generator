import TwitterBio from '@/components/twitter-bio';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GPT Twitter Bio Generator</title>
        <meta name="description" content="GPT Twitter Bio Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <TwitterBio />
      </main>
    </>
  )
}
