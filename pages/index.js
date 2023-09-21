
import Image from 'next/image';
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>home</title>
      </Head>
      <Header />
      <p>home</p>
      <Link href="/about-me">na mna</Link>
      <Footer />
    </Layout>
  );
}

export default Home;