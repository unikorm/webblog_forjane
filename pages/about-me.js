
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout"
import styles from "../styles/layout.module.css";

const AboutSection = () => {
    return (
        <Layout>
            <Head>
                <title>Ja (moja maličkosť)</title>
            </Head>
            <section className={styles.aboutMeSection}>
                <h2>Tu je malý opis môjho Ja</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo mollis interdum. Maecenas facilisis vitae neque et efficitur. Pellentesque sit amet venenatis est. Nunc urna felis, dapibus vitae ultricies at, lobortis sit amet tortor. Curabitur condimentum nibh non eros placerat, eget maximus lorem euismod. Fusce a tortor bibendum, accumsan mi quis, suscipit mi. Suspendisse porttitor, risus quis ornare sodales, purus lorem sollicitudin nunc, ac ultrices est velit et ipsum. Vivamus sed leo vel eros gravida tempus vitae interdum dui. Nunc quis vestibulum arcu. Praesent fermentum tellus nisl. Nullam finibus sem sit amet porta consectetur. Sed consequat lacinia nulla. Praesent nulla sapien, iaculis a venenatis in, posuere quis libero. Aliquam erat volutpat. Proin eu ante posuere, rutrum nisl in, scelerisque velit.</p>
                <br />
                <p>Vivamus sed leo vel eros gravida tempus vitae interdum dui. Nunc quis vestibulum arcu. Praesent fermentum tellus nisl. Nullam finibus sem sit amet porta consectetur. Sed consequat lacinia nulla. Praesent nulla sapien, iaculis a venenatis in, posuere quis libero. Aliquam erat volutpat. Proin eu ante posuere, rutrum nisl in, scelerisque velit.</p>
            </section>
            <Link href="/">←🏠</Link>
        </Layout>
    );
}

export default AboutSection;