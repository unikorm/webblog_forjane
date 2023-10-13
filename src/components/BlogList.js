
import styles from "../styles/blogList.module.css";
import React from "react";

const BlogList = ({ articles, onArticleClick }) => {

    return (
        <section className={styles.blogListSection}>
            <h4>MôJ BLOG</h4>
            {articles.map((article) => (
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