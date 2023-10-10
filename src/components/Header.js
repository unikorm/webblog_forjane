
import styles from "../styles/header.module.css";

const Header = () => {

    return (
        <header>
            <h1>JANA LEDNICKÁ</h1>   { /* this will be more robust, this is basic structure only */ }
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;