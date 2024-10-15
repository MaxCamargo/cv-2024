import { ButtonProps } from "./types";
import styles from "./button.module.css";

const Button = ({ text, icon, className, onClick }: ButtonProps) => {

  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      <div className={styles.buttonContainer}>
        <div>{icon}</div>
        <p className={styles.textButton}>{text}</p>
      </div>
    </button>
  );
};

export default Button;
