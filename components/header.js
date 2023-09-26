
import Link from 'next/link';
import styles from "../styles/layout.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul className={styles.navStyles}>
            <li><Link href="/">Domov</Link></li>
            <li><Link href="./about-me">Ja</Link></li>
            <li><Link href="/">Notin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
