import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Context/Authentication/action";
import {
  useAuthContext,
  useAuthDispatch,
} from "../../Context/Authentication/AuthContext";
import { Button } from "./Button";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatch();

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
              <>
                <Link to="admin">
                  <Button variant="secondary">Admin Actions</Button>
                </Link>
                <Button variant="secondary" onClick={() => logout(dispatch)}>
                  Logout
                </Button>
              </>
            ) : (
              <Button>Logout</Button>
            )
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
