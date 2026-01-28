import styles from "./FooterColumn.module.css";

interface FooterColumnProps {
  title?: string;
  children: React.ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className={styles.column}>
      {title && <h3 className={styles.columnTitle}>{title}</h3>}
      {children}
    </div>
  );
}
