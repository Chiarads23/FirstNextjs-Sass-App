import Head from "next/head";

import { HomePage } from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

// getServerSide allows to pre-render the page on SERVERSIDE (never on the browser)at a request time using the data returned by getServerSideProps
// it's necessary to EXPORT it
export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
