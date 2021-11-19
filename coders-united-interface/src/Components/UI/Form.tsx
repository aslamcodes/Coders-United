import styles from "./Form.module.css";
import Select from "react-select";
import { FaFileUpload } from "react-icons/fa";
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

Form.TextArea = ({ ...props }) => {
  return <textarea className={styles["form-textarea"]} {...props}></textarea>;
};

Form.FileSelect = ({ title, ...props }) => {
  return (
    <div className={styles["form-file-input"]}>
      <label htmlFor="file-input">
        <p>{title}</p>
        <FaFileUpload />
      </label>
      <input id="file-input" type="file" {...props} />
    </div>
  );
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
  multiValue: (base, state) => ({
    ...base,
    fontSize: "20px",
    backgroundColor: "#36393F",
    color: "#fff",
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: "#fff",
  }),
});
