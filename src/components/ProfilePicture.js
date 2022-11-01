import { useContext } from 'react';
import { UserContext } from '../utils/Context';

import styles from './ProfilePicture.module.css';

export default function ProfilePicture() {
  const { picture, userName, profilePictureBGcolor } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <img
        className={styles.avatar}
        src={picture}
        alt={userName}
        style={{ backgroundColor: `${profilePictureBGcolor}` }}
      />
    </div>
  );
}
