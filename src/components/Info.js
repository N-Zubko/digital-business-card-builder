import styles from './Info.module.css';
import { useContext } from 'react';
import { UserContext } from '../utils/Context';
import emailLogo from '../assets/Email-logo.png';
import linkendinLogo from '../assets/LinkedIn-logo.png';

export default function Info() {
  const { userTitle, userName, website, email, linkedIn, titleColor } =
    useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.bio}>
        <h1 className={styles.name}>{userName}</h1>
        <p className={styles.title} style={{ color: `${titleColor}` }}>
          {userTitle}
        </p>
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
