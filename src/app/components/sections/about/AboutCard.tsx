import styles from "./AboutCard.module.css";

type AboutCardProps = {
  subtitle: string;
  text: string;
};

export default function AboutCard({ subtitle, text }: AboutCardProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
