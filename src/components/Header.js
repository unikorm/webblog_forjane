
import styles from "../styles/header.module.css";

import React from "react";
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header>
            <h1>JANA LEDNICKÁ</h1>
            <nav>
                <ul>
                    <li onClick={() => handleNavigation("/about-me")} >About Me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;