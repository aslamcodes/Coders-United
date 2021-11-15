import React from "react";
import styles from "./Cards.module.css";
export const Cards = ({ children }) => {
  return <div className={styles.cards}>{children}</div>;
};
