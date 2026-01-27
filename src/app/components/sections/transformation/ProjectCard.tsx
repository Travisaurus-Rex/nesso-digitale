import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  image,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
