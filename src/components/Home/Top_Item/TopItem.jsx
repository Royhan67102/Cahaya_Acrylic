import styles from './topItem.module.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';

function TopItem() {
  const [items, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const sliderRef = useRef(null);

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

  let animationFrame;
  let scrollSpeed = 0.5;
  let isPaused = false;

  const canScroll = () => slider.scrollWidth > slider.clientWidth + 1;

  const autoScroll = () => {
    if (isPaused || !canScroll()) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft + scrollSpeed >= maxScrollLeft) {
      // Tunggu sebentar sebelum reset (opsional, bisa langsung juga)
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += scrollSpeed;
    }

    animationFrame = requestAnimationFrame(autoScroll);
  };

  const startScroll = () => {
    stopScroll();
    if (canScroll()) {
      isPaused = false;
      animationFrame = requestAnimationFrame(autoScroll);
    }
  };

  const stopScroll = () => {
    isPaused = true;
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  };

  // Jalankan saat dimount dan setiap resize
  startScroll();

  // Interaksi user stop scroll
  slider.addEventListener('mouseenter', stopScroll);
  slider.addEventListener('mouseleave', startScroll);
  slider.addEventListener('touchstart', stopScroll);
  slider.addEventListener('touchend', startScroll);
  window.addEventListener('resize', startScroll);

  return () => {
    stopScroll();
    slider.removeEventListener('mouseenter', stopScroll);
    slider.removeEventListener('mouseleave', startScroll);
    slider.removeEventListener('touchstart', stopScroll);
    slider.removeEventListener('touchend', startScroll);
    window.removeEventListener('resize', startScroll);
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
