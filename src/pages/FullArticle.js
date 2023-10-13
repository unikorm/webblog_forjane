
import articles from "../data.json";
import styles from "../styles/fullArticle.module.css";

import React from "react";

const FullArticle = ({ match }) => {
    const articleId = parseInt(match.params.id, 10);
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