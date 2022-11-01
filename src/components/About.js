import styles from './About.module.css';

export default function About() {
  const text =
    'I am a translator who turned to become full stack web developer. Helping people to communicate their needs, have their best web experience, polishing every detail, and learning new technologies - the things I am best at';
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>{text}</p>
    </main>
  );
}
