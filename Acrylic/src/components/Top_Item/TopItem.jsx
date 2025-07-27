import styles from './topItem.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TopItem() {
  const [items, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("data");
      if (local) {
        setDatas(JSON.parse(local));
      } else {
        try {
          const response = await axios.get('/item.json');
          setDatas(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    const handleStorage = () => {
      const local = localStorage.getItem("data");
      if (local) setDatas(JSON.parse(local));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);

  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          Custom Item History
        </div>
        <span className={styles.wordItem}>Yours is custom too now!</span>
        <div className={styles.package__container}>
          {items.map((pack) => (
            <div key={pack.id} className={styles.package__item}>
              <img src={pack.img} alt={pack.title} className={styles.pack_img_card} />
              <h3 className={styles.item_title}>{pack.title}</h3>
              <div className={styles.uang_group}>
                <img src="/price.png" alt="Rp" className={styles.price_ikon} />
                <span className={styles.render_price}>{pack.price}</span>
              </div>
              <button className={styles.button_detail}>Detail</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopItem;