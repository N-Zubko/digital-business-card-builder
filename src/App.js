import { useState } from 'react';
import { UserContext } from './utils/Context';

import './App.css';
import Board from './views/Board';
import Canvas from './views/Canvas';
import samplePicture from './assets/Profile_Picture.png';

export default function App() {
  const [profilePictureBGcolor, setProfilePictureBGcolor] = useState('#D93FA1');
  const [userName, setUserName] = useState('Type in Name');
  const [userTitle, setUserTitle] = useState('Type in Your Title');
  const [website, setWebsite] = useState('Type in Website');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [github, setGithub] = useState('');
  const [about, setAbout] = useState('Type in information about you');
  const [interests, setInterests] = useState('Type in your interests');
  const [picture, setPicture] = useState(samplePicture);
  const [titleColor, setTitleColor] = useState('#4B1136');
  return (
    <UserContext.Provider
      value={{
        profilePictureBGcolor,
        setProfilePictureBGcolor,
        userName,
        setUserName,
        userTitle,
        setUserTitle,
        email,
        setEmail,
        twitter,
        setTwitter,
        linkedIn,
        setLinkedIn,
        github,
        setGithub,
        about,
        setAbout,
        interests,
        setInterests,
        picture,
        setPicture,
        titleColor,
        setTitleColor,
        website,
        setWebsite,
      }}
    >
      <div className="App">
        <Board />
        <Canvas />
      </div>
    </UserContext.Provider>
  );
}
