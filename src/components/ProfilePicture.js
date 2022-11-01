import styles from './ProfilePicture.module.css';
import picture from '../assets/Profile_Picture.png';

export default function ProfilePicture() {
  const name = 'Nadia Zubko';
  return (
    <div className={styles.header}>
      <img className={styles.avatar} src={picture} alt={name} />
    </div>
  );
}
