import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Homepage/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Empire</title>
        <meta name="title" content="Money Empire" />
        <meta
          name="description"
          content="An application to efficiently manage your expenses"
        />
        <meta property="og:title" content="Money Empire" />
        <meta
          property="og:description"
          content="An application to efficiently manage your expenses"
        />
        <meta
          property="og:description"
          content="An application to efficiently manage your expenses"
        />
        <meta property="og:image" content="/header.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
