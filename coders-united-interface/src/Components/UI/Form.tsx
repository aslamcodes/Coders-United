import styles from "./Form.module.css";
export const Form = ({ children, className = "", ...props }) => {
  return (
    <div className={`${styles["form-container"]}`}>
      <form {...props} className={styles.form}>
        {children}
      </form>
    </div>
  );
};

Form.Group = ({ children, ...props }) => (
  <div {...props} className={styles["form-group"]}>
    {children}
  </div>
);

Form.Input = ({ ...props }) => (
  <input className={styles["form-input"]} {...props} />
);

Form.Label = ({ children, ...props }) => (
  <label className={styles["form-label"]} {...props}>
    {children}
  </label>
);
