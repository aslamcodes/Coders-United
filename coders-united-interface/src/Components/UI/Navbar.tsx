import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
      <div className={styles["nav-item"]}>
        <img src="/logo.svg" alt="Coders United logo" className={styles.logo} />
        <h1>Coders United</h1>
      </div>
    </nav>
  </header>
);
