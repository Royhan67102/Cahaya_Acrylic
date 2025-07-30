import styles from './topItem.module.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';

function TopItem() {
  const [items, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

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

  const handleDetailClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  // === AUTO SLIDER ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || items.length === 0) return;

    const startScroll = () => {
      stopScroll();
      intervalRef.current = setInterval(() => {
        const item = slider.querySelector(`.${styles.package__item}`);
        if (!item) return;

        const gap = parseInt(getComputedStyle(slider).gap || '10', 10);
        const itemWidth = item.offsetWidth + gap;

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (Math.ceil(slider.scrollLeft + 1) >= maxScroll) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }, 3000);
    };

    const stopScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    startScroll();

    // Interaksi pengguna menghentikan scroll sementara
    slider.addEventListener('mouseenter', stopScroll);
    slider.addEventListener('mouseleave', startScroll);
    slider.addEventListener('touchstart', stopScroll);
    slider.addEventListener('touchend', startScroll);

    const handleResize = () => {
      stopScroll();
      startScroll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stopScroll();
      slider.removeEventListener('mouseenter', stopScroll);
      slider.removeEventListener('mouseleave', startScroll);
      slider.removeEventListener('touchstart', stopScroll);
      slider.removeEventListener('touchend', startScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [items]);

  return (
    <div className={styles.container}>
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          <h2 className={styles.list_historyItem}>Custom Item History</h2>
        </div>
        <span className={styles.wordItem}>Yours is custom too now!</span>

        <div className={styles.package__container} ref={sliderRef}>
          {items.map((pack) => (
            <div key={pack.id} className={styles.package__item}>
              <img src={pack.img} alt={pack.title} className={styles.pack_img_card} />
              <div className={styles.wrap_title}>
                <h3 className={styles.item_title}>{pack.title}</h3>
              </div>
              <div className={styles.uang_detail}>
                <div className={styles.uang_group}>
                  <img src="/price.png" alt="Rp" className={styles.price_ikon} />
                  <span className={styles.render_price}>{pack.price}</span>
                </div>
                <button className={styles.button_detail} onClick={() => handleDetailClick(pack)}>
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        <Detail item={selectedItem} onClose={closePopup} />
      </section>
    </div>
  );
}

export default TopItem;
