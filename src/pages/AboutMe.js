
import styles from "../styles/aboutMe.module.css";

import React, { useEffect } from "react";

const AboutMe = () => {
    const profilePhoto = "/images/profile.webp";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.aboutMePage}>
            <img src={process.env.PUBLIC_URL + profilePhoto} />
            <h2>JANKA LEDNICKÁ</h2>
            <article>
                <h4>Who am I ?</h4>
                <p>Perhaps the biggest thing to know is that a filter will hug the edges of an element moreso than the rectangular box-shadow will do (even though box-shadow does hug rounded corners). The box-shadow property in CSS is for putting shadows on elements (sometimes referred to as “drop shadows”, ala Photoshop/Figma). If you put a file into the public folder, it will not be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the public folder, you need to use an environment variable called PUBLIC_URL.</p>
            </article>
        </section>
    );
};

export default AboutMe;