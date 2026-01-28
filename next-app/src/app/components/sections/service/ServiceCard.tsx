import { ReactNode } from "react";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  text: string;
  icon?: ReactNode;
  featured?: boolean;
  as?: "div" | "button";
};

export default function ServiceCard({
  title,
  text,
  icon,
  featured = false,
  as = "div",
}: ServiceCardProps) {
  const Component = as;

  return (
    <Component className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>

      <p className={styles.text}>{text}</p>
    </Component>
  );
}
