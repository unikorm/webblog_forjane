
import styles from "../styles/footer.module.css";


const Footer = () => {

    const insta = "/images/instagram-30.png";
    const facebook = "/images/facebook-30.png";
    const tinder = "/images/tinder-30.png";

    return (
        <footer>
            <h2>
                JANA <br /> LEDNICKÁ
            </h2>
            <section>
                <img src={process.env.PUBLIC_URL + insta} />
                <img src={process.env.PUBLIC_URL + facebook} />
                <img src={process.env.PUBLIC_URL + tinder} />
            </section>
            <ul>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </footer>
    );
};

export default Footer;