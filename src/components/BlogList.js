
import styles from "../styles/blogList.module.css";
import data from "../data.json";

import React from "react";
import { Link } from 'react-router-dom'; 

const BlogList = () => {

    const convertArticlesToArray = (object) => {
    return Object.keys(object).map((id) => object[id]);
    };
    
    const { articles } = data;
    const articlesArray = convertArticlesToArray(articles);

    return (
        <section className={styles.blogListSection}>
            <h4>MôJ BLOG</h4>
            {articlesArray.map((article) => (
                <Link to={`/${article.id}`} key={article.id}>
                    <h5>{article.title}</h5>
                    <p>{article.content.slice(0, 100) + "..."}</p>
                </Link>
            ))}
        </section>
    );
};

export default BlogList;