import React from "react";
import { Button } from "./Button";
import styles from "./Navbar.module.css";
export const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
      <div>
        <img src="/logo.svg" alt="Coders United logo" className={styles.logo} />
        <h1>Coders United</h1>
      </div>
      <div className={styles["nav-actions"]}>
        <Button variant="secondary">Admin Actions</Button>
        <Button variant="primary">
          <a
            href="https://discord.gg/UhytVdnr4Q"
            target="_blank"
            rel="noreferrer"
          >
            Join the server💖
          </a>
        </Button>
      </div>
    </nav>
  </header>
);
