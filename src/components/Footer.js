
import styles from "../styles/footer.module.css";

import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const insta = "/images/instagram-30.png";
    const facebook = "/images/facebook-30.png";
    const tinder = "/images/tinder-30.png";

    return (
        <footer>
            <h2><Link to="/">
                JANKA <br /> LEDNICKÁ
            </Link></h2>
            <section>
                <img src={process.env.PUBLIC_URL + insta} />
                <img src={process.env.PUBLIC_URL + facebook} />
                <img src={process.env.PUBLIC_URL + tinder} />
            </section>
            <ul>
                <li><Link to="/about-me">
                    Abut Me
                </Link></li>
            </ul>
        </footer>
    );
};

export default Footer;