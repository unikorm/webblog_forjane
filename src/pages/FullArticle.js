
import articles from "../data.json";

import React from "react";

const FullArticle = ({ articleId }) => {
const article = articles.find((article) => article.id === articleId);

if (!article) {
    return (
        <p>cosi je na p***</p>
    );
};

return (
    <article>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
    </article>
);

};

export default FullArticle;