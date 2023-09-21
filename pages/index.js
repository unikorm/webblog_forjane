
// import Image from 'next/image';

import Link from "next/link";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <p>home</p>
      <Link href="/about-me">na mna</Link>
    </Layout>
  );
}

export default Home;