import styles from './Interest.module.css';

export default function Interest() {
  const interests =
    'JavaScript. Creativity. Collaboration. Volunteering. Travelling';
  return (
    <main className={styles.interest}>
      <h2 className={styles.header}>Interests</h2>
      <p className={styles.texts}>{interests}</p>
    </main>
  );
}
