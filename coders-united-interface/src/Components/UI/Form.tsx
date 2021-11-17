import styles from "./Form.module.css";
export default function Form({ children, className = "", ...props }) {
  return (
    <div className={`${styles["form-container"]}`}>
      <form {...props} className={styles.form}>
        {children}
      </form>
    </div>
  );
}

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

Form.Title = ({ children, ...props }) => (
  <p className={styles["form-title"]} {...props}>
    {children}
  </p>
);

Form.Select = ({ children, ...props }) => (
  <select className={styles["form-select"]} {...props}>
    {children}
  </select>
);

Form.Option = ({ children, ...props }) => (
  <option className={styles["form-option"]} {...props}>
    {children}
  </option>
);
