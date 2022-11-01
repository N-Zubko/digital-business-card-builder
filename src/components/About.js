import styles from './About.module.css';

export default function About() {
  const text =
    'I am a translator who decided to become a full stack web developer. Helping people to communicate their needs, provide them with seemless web experience, polishing every detail, and learning new technologies are the things I am best at.';
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>{text}</p>
    </main>
  );
}
