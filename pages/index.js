
import Image from 'next/image';
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import PostList from '../components/postList';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>home</title>
      </Head>
      <p>home</p>
      <PostList />
      <Link href="/about-me">na mna</Link>
    </Layout>
  );
}

export default Home;