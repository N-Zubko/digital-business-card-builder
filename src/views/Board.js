import { useState } from 'react';
import styles from './Board.module.css';

export default function Board() {
  const [profilePictureBGcolor, setProfilePictureBGcolor] = useState('#008cb4');

  return (
    <div className={styles.container}>
      <h2>Board</h2>
      <form>
        <p>Choose your profile picture background color:</p>
        <input
          type="color"
          id="profile-picture-background"
          name="profile-picture-background"
          value={profilePictureBGcolor}
          onChange={(e) => setProfilePictureBGcolor(e.target.value)}
        />
        <label htmlFor="head">Head</label>
        <p>Add a file</p>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        ></input>
        <p>Audio settings:</p>
        <input type="range" id="volume" name="volume" min="0" max="11" />
        <label htmlFor="volume">Volume</label>
      </form>
    </div>
  );
}
