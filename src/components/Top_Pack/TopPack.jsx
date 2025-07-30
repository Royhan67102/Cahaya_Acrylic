import styles from './topPack.module.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';

function TopPack() {
  const [packs, setPacks] = useState([]);
  const [selectedPack, setSelectedPack] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("pack");
      if (local) {
        setPacks(JSON.parse(local));
      } else {
        try {
          const response = await axios.get('/pack.json');
          setPacks(response.data);
        } catch (error) {
          console.error('Error fetching pack data:', error);
        }
      }
    };

    fetchData();

    const handleStorage = () => {
      const local = localStorage.getItem("pack");
      if (local) setPacks(JSON.parse(local));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleDetailClick = (item) => {
    setSelectedPack(item);
  };

  const closePopup = () => {
    setSelectedPack(null);
  };

  // AUTOPLAY SLIDER
   useEffect(() => {
  const slider = sliderRef.current;
  if (!slider || packs.length === 0) return;

  let animationFrame;
  let scrollSpeed = 0.5; // bisa disesuaikan kecepatannya

  const autoScroll = () => {
    // Kalau sudah sampai ujung kanan, balik ke kiri tanpa jeda
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += scrollSpeed;
    }
    animationFrame = requestAnimationFrame(autoScroll);
  };

  const startScroll = () => {
    stopScroll();
    animationFrame = requestAnimationFrame(autoScroll);
  };

  const stopScroll = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  };

  startScroll();

  // Pause saat interaksi pengguna
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
}, [packs]);

  return (
    <div className={styles.container}>
      <section className={styles.Package}>
         <div className={styles.sub_historyItem}>
              <h2 className={styles.list_historyItem}>Top Pack Recommendation</h2>
          </div>
        <span className={styles.wordItem}>Check out your top picks!</span>

        <div className={styles.package__container} ref={sliderRef}>
          {packs.map((pack) => (
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
                          <button
                            className={styles.button_detail}
                            onClick={() => handleDetailClick(pack)}
                          >
                            Detail
                          </button>
                        </div>
                        </div>
                      ))}
        </div>

        <Detail item={selectedPack} onClose={closePopup} />
      </section>
    </div>
  );
}

export default TopPack;
