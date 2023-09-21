
// import './globals.css'
import styles from "../styles/layout.module.css";

const RootLayout = ({ children }) => {
  return (
    <div lang="en">
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default RootLayout;