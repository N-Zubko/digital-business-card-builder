import styles from './Footer.module.css';
import twitterLogo from '../assets/Twitter-logo.png';
import githubLogo from '../assets/Github-logo.png';

export default function Footer() {
  const github = 'https://github.com/N-Zubko';
  const twitter = 'https://twitter.com/NadezhdaZ5';
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href={github}
        >
          <img
            src={githubLogo}
            alt="Click to open Nadia Zubko's GitHub page"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href={twitter}
        >
          <img
            src={twitterLogo}
            alt="Click to open Nadia Zubko's Twitter"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}
