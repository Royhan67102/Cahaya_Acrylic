// src/component/Detail.jsx
import styles from './Detail.module.css';

function Detail({ item, onClose }) {
  if (!item) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={styles.infoWrapper}>
            <h2>{item.title}</h2>
            <p className={styles.price}>Rp {item.price}</p>
            <p className={styles.desc}>{item.desc || 'Deskripsi produk belum tersedia.'}</p>

            <button className={styles.wantItButton}>Want It</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
