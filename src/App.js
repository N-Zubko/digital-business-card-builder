import { useState } from 'react';
import { UserContext } from './utils/Context';

import './App.css';
import Board from './views/Board';
import Canvas from './views/Canvas';
import samplePicture from './assets/Profile_Picture.png';

export default function App() {
  const [profilePictureBGcolor, setProfilePictureBGcolor] = useState('#A48498');
  const [userName, setUserName] = useState('Your Name');
  const [userTitle, setUserTitle] = useState('Your Title');
  const [website, setWebsite] = useState('Website');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [github, setGithub] = useState('');
  const [about, setAbout] = useState('Share information about you');
  const [interests, setInterests] = useState('Your interests');
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
