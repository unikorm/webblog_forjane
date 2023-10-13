
import styles from "../styles/blogList.module.css";
import articles from "../data.json";

import React from "react";
import { useNavigate } from 'react-router-dom'; 

const BlogList = () => {
    const navigate = useNavigate();

    const onArticleClick = (articleId) => {
        navigate(`/article/${articleId}`);
    };

    return (
        <section className={styles.blogListSection}>
            <h4>MôJ BLOG</h4>
            {articles.articles.map((article) => (
                <article
                    key={article.id}
                    onClick={() => onArticleClick(article.id)}
                >
                    <h5>{article.title}</h5>
                    <p>{article.content.slice(0, 100) + "..."}</p>
                </article>
            ))}
        </section>
    );
};

export default BlogList;