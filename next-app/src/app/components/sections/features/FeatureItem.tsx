import styles from "./FeatureItem.module.css";

type FeatureItemProps = {
  title: string;
  text: string;
};

export default function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <div className={styles.feature}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
