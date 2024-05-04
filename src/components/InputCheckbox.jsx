import styles from "./InputCheckbox.module.css";
export default function InputCheckbox({ type, value, id, htmlFor, onClick }) {
  return (
    <>
      <input
        className={styles.inputCheckbox}
        type={type}
        value={value}
        id={id}
        onClick={onClick}
      ></input>
      <label className={styles.labelCheckbox} htmlFor={htmlFor}></label>
    </>
  );
}
// label ONLY AFTER INPUT
