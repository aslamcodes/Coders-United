import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import { Button } from "./Button";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  return (
    <header>
      <nav className={styles.navbar}>
        <div>
          <img
            src="/logo.svg"
            alt="Coders United logo"
            className={styles.logo}
          />
          <h1>Coders United</h1>
        </div>
        <div className={styles["nav-actions"]}>
          {user ? (
            user.isAdmin ? (
              <Link to="admin">
                <Button variant="secondary">Admin Actions</Button>
              </Link>
            ) : null
          ) : (
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          )}

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
};
