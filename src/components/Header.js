
import styles from "../styles/header.module.css";

import React from "react";
import { Link } from 'react-router-dom'; 

const Header = () => {

    return (
        <header>
            <h1><Link to="/" >JANKA LEDNICKÁ</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/about-me" >About Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;