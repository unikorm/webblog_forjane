
import styles from "../styles/blogList.module.css";
import data from "../data.json";

import React from "react";
import { Link } from 'react-router-dom'; 

const BlogList = () => {
    // const navigate = useNavigate();
    const { articles } = data;

    // const onArticleClick = (articleTitle) => {
    //     const url = articleTitle.split(" ").join("-");
    //     navigate(`/${url}`);
    // };

    return (
        <Link to="/:id" className={styles.blogListSection}>
            <h4>MôJ BLOG</h4>
            {articles.map((article) => (
                <article key={article.id}>
                    <h5>{article.title}</h5>
                    <p>{article.content.slice(0, 100) + "..."}</p>
                </article>
            ))}
        </Link>
    );
};

export default BlogList;