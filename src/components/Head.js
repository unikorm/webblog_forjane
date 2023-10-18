
import styles from "../styles/head.module.css";

const Head = () => {
    const profilePhoto = "/images/profile.webp";

    return (
        <section className={styles.headSection}>
            <img src={process.env.PUBLIC_URL + profilePhoto} />
            <h2>JANA LEDNICKÁ</h2>
            <p>Som obyčajne dedinské dievča ktoré ľúbi dobrodružstvo, adrenalín, pohyb. Tu si môžte prečítať niečo s mojej reality ktorá nieje vždy ružová no ako sa vraví “čo ťa nezabije to ťa posilní “. 🐧</p>
        </section>
    );
};

export default Head;