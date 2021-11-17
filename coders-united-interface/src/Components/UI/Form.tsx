import styles from "./Form.module.css";
import Select from "react-select";
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

Form.Select = ({ options, ...props }) => {
  return <Select options={options} styles={getSelectStyles()} {...props} />;
};

const getSelectStyles = () => ({
  control: (base) => ({
    ...base,
    background: "#272934",
    borderColor: "#272934",
    borderRadius: "10px",
    padding: "5px",
    "&:hover": {
      borderColor: "#272934",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "#272934",
    color: "#fff",
  }),
  option: (base) => ({
    ...base,
    color: "#fff",
    backgroundColor: "#272934",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#36393f",
    },
  }),
  placeholder: (base) => ({ ...base, fontSize: "20px" }),
  menuList: (base) => ({
    ...base,
    borderRadius: "10px",
  }),
  singleValue: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: "20px",
  }),
});
