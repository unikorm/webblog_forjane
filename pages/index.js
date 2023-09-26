
import Image from 'next/image';
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import PostList from '../components/postList';
import styles from "../styles/layout.module.css";
import {content} from "../utils/api";

export async function getStaticProps() {
  const message = await content('first-post.md');
  return {
    message,
  }
}

const Home = ({message}) => {
  return (
    <Layout>
      <Head>
        <title>Domov</title>
      </Head>
      <section className={styles.aboutMeOnMain}>
        <Image
          src="/images/profile-photo.jpg"
          className={styles.profilePhotoMain}
          height={190}
          width={190}
          alt="janula naša"
        />
        <h1>Janka LEDNICKÁ</h1>
        <div dangerouslySetInnerHTML={{ __html: message }} />
        <p>Som obyčajne dedinské dievča ktoré ľúbi dobrodružstvo, adrenalín, pohyb. Tu si môžte prečítať niečo s mojej reality ktorá nieje vždy ružová no ako sa vraví “čo ťa nezabije to ťa posilní “.🐧</p>
      </section>
      <PostList />
    </Layout>
  );
}

export default Home;

