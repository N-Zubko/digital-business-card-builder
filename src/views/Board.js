import { useContext } from 'react';
import { UserContext } from '../utils/Context';

import styles from './Board.module.css';

export default function Board() {
  const {
    profilePictureBGcolor,
    setProfilePictureBGcolor,
    userName,
    setUserName,
    setUserTitle,
    userTitle,
  } = useContext(UserContext);
  const { titleColor, setTitleColor } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <form>
        <p>Fill out fields and select colours:</p>
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
        <label htmlFor="head">Title colour</label>
        <br />
        <input
          id="user-title"
          name="user-title"
          type="text"
          value={userTitle}
          onChange={(e) => setUserTitle(e.target.value)}
        />
        <label htmlFor="user-title">Name</label>
        <br />
        <p>Add a file</p>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        ></input>
        <p>Size settings:</p>
        <input type="range" id="volume" name="volume" min="0" max="11" />
        <label htmlFor="volume">Size</label>
      </form>
    </div>
  );
}
