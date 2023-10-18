
import styles from "../styles/contacts.module.css";

import React, { useEffect } from "react";

const Contacts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <p>kontakty</p>
    );
};

export default Contacts;