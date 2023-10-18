
import styles from "../styles/footer.module.css";

import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const insta = "/images/instagram-30.png";
    const facebook = "/images/facebook-30.png";
    const tinder = "/images/tinder-30.png";

    return (
        <footer>
            <h2 onClick={() => handleNavigation("/")} >
                JANKA <br /> LEDNICKÁ
            </h2>
            <section>
                <img src={process.env.PUBLIC_URL + insta} />
                <img src={process.env.PUBLIC_URL + facebook} />
                <img src={process.env.PUBLIC_URL + tinder} />
            </section>
            <ul>
                <li onClick={() => handleNavigation("/about-me")} >About Me</li>
            </ul>
        </footer>
    );
};

export default Footer;