import styles from "./Alert.module.css";

const variants = {
  error: {
    icon: "error",
    styles: {
      backgroundColor: "#F8D7DA",
    },
  },
};

export const Alert = ({ variant, message }) => {
  return (
    <div style={{ ...variants[variant].styles }} className={styles.alert}>
      <img src={`/icons/${variants[variant].icon}.svg`} alt="icon" />
      <p>{message}</p>
    </div>
  );
};
