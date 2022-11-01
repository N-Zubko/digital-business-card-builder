import styles from './Canvas.module.css';

import Info from '../components/Info';
import About from '../components/About';
import Interest from '../components/Interest';
import Footer from '../components/Footer';
import ProfilePicture from '../components/ProfilePicture';

export default function Canvas() {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
