import styles from './Canvas.module.css';

import Info from '../components/Info';
import About from '../components/About';
import Interest from '../components/Interest';
import Footer from '../components/Footer';

export default function Canvas() {
  return (
    <div className={styles.container}>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
