
import articles from "../data.json";
import styles from "../styles/fullArticle.module.css";

import React from "react";
import { useParams } from "react-router-dom";

const FullArticle = () => {
    const { id } = useParams();
    const articleId = articles.articles.find((post) => post.id === parseInt(id, 10));
    const article = articles.articles.find((article) => article.id === articleId);

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