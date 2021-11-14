import React from "react";
import styles from "./Button.module.css";

const variants = {
  primary: {
    backgroundColor: "#4eb56e",
  },
  secondary: {
    backgroundColor: "#272934",
  },
};

export const Button = ({ children, variant, ...props }) => {
  return (
    <button
      {...props}
      style={{
        ...variants[variant],
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};
