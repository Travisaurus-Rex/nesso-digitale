import SectionTitle from "../section-title/SectionTitle";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={styles.header + ` ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <p className={styles.headerText}>{description}</p>
    </div>
  );
}
