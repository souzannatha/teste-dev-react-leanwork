import styles from './card.module.css';

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.photo} />
      <div className={styles.description}>
        <h3 className={styles.titleCard}>Mens Cotton Jacket</h3>
        <span className={styles.oldPrice}>R$ 84.99</span>
        <p className={styles.price}>R$ 55.99</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Buy It</button>
      </div>
    </div>
  );
}
