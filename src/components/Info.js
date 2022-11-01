import styles from './Info.module.css';
import emailLogo from '../assets/Email-logo.png';
import linkendinLogo from '../assets/LinkedIn-logo.png';

export default function Info() {
  const name = 'Nadia Zubko';
  const email = 'mailto:na-zubko@outlook.com';
  const linkedIn = 'https://www.linkedin.com/in/nadezhda-zubko-developer/';
  const title = 'Full Stack Web Developer';
  const website = 'website coming soon';
  return (
    <div className={styles.container}>
      <div className={styles.bio}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.small}>{website}</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href={email}
          >
            <img
              className={styles.icons}
              src={emailLogo}
              alt="Click to email Nadia Zubko"
            />
            Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href={linkedIn}
          >
            <img
              className={styles.icons}
              src={linkendinLogo}
              alt="click to go to Nadia's LinkedIn profile"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
