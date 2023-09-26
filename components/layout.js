
// import './globals.css'
import React from "react";
import styles from "../styles/layout.module.css";
import Footer from "./footer";
import Header from "./header";

const RootLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default RootLayout;