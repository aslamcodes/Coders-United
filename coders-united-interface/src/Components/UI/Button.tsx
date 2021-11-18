import React from "react";
import { Loader } from "../Helpers/Spinners";
import styles from "./Button.module.css";

const variants = {
  primary: {
    backgroundColor: "#4eb56e",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#272934",
    color: "#fff",
  },
};

export const Button = ({
  children,
  variant = "primary",
  enableLoading = false,
  disabled = false,
  ...props
}) => {
  function MouseOver(event) {
    event.target.style.background = "red";
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }

  return (
    <button
      {...props}
      style={{
        ...variants[variant],
      }}
      className={styles.button}
      disabled={disabled}
    >
      {enableLoading && disabled ? (
        <div className={styles.loading}>
          <Loader />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
