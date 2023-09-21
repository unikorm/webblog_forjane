
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout"

const AboutSection = () => {
    return (
        <Layout>
            <Head>
                <title>about</title>
            </Head>
            <p>about</p>
            <Link href="/">main back</Link>
        </Layout>
    );
}

export default AboutSection;