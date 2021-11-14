import React from "react";
import styles from "./Card.module.css";
export const Card = ({ title, icon, desc: description }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} />
      <div>
        <p className={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
