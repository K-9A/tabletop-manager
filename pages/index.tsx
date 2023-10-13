import Head from "next/head";
import { Fragment } from "react";
import HomePage from "@/components/homepage/homepage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Welcome to Tabletop Manager</title>
        <meta name="Homepage" content="Homepage of the Tabletop Manager Website" />
      </Head>
      <HomePage />
    </Fragment>
  );
}
