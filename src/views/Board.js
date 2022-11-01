import { useContext } from 'react';
import { UserContext } from '../utils/Context';

import styles from './Board.module.css';

export default function Board() {
  const {
    profilePictureBGcolor,
    setProfilePictureBGcolor,
    userName,
    setUserName,
  } = useContext(UserContext);
  const { titleColor, setTitleColor } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <h2>Board</h2>
      <form>
        <p>Choose your color:</p>
        <input
          type="color"
          id="profile-picture-background"
          name="profile-picture-background"
          value={profilePictureBGcolor}
          onChange={(e) => setProfilePictureBGcolor(e.target.value)}
        />
        <label htmlFor="title-color">Profile picture background</label>
        <br />
        <input
          id="user-name"
          name="user-name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="user-name">Name</label>
        <br />
        <input
          type="color"
          id="title-color"
          name="title-color"
          value={titleColor}
          onChange={(e) => setTitleColor(e.target.value)}
        />
        <label htmlFor="head">Title</label>
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
