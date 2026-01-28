import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  showIcon?: boolean;
}

export default function Button({ children, showIcon = false }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
      {showIcon && <ArrowUpRight className={styles.icon} size={20} />}
    </button>
  );
}
