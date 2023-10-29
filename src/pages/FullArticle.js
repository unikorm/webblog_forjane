
import data from "../data.json";
import styles from "../styles/fullArticle.module.css";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const FullArticle = () => {
    const { id } = useParams();
    const { articles } = data;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const article = articles.find((article) => article.id === parseInt(id));
    const article = articles[id];

    if (!article) {
        return (
            <p>cosi je na p***</p>
        );
    };

    return (
        <article className={styles.fullArticleArticle}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </article>
    );

};

export default FullArticle;