import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("data");
      if (local) {
        setItems(JSON.parse(local));
      } else {
        try {
          const response = await axios.get('/item.json'); 
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    const handleStorage = () => {
      const local = localStorage.getItem("data");
      if (local) setItems(JSON.parse(local));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.image} />

            <h3 className={styles.title}>{item.title}</h3>

            <div className={styles.priceRow}>
              <img src="/price.png" alt="Rp" className={styles.priceIcon} />
              <span className={styles.price}>{item.price}</span>
            </div>

            <div className={styles.rating}>
              ⭐⭐⭐⭐⭐ <span>5.00</span>
            </div>

            <div className={styles.actions}>
              <button className={styles.buyBtn}>Beli Sekarang</button>
              <button className={styles.detailBtn}>Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
