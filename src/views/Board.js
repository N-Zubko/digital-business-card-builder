import styles from './Board.module.css';

export default function Board() {
  let value = '#e66465';

  return (
    <div className={styles.container}>
      <h2>Board</h2>
      <form>
        <p>Choose your monster's color:</p>
        <input type="color" id="head" name="head" value={value} />
        <label for="head">Head</label>
      </form>
    </div>
  );
}
