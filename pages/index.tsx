import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../layouts/DashboardLayout";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Pothole Detection</title>
        <meta name="description" content="Pothole detection application" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <DashboardLayout />
    </div>
  );
};

export default Home;
