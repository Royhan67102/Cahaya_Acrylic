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
    if (!slider) return;

    const scrollStep = () => {
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (Math.ceil(slider.scrollLeft) >= maxScroll) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: 240, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollStep, 3000);

    return () => clearInterval(interval);
  }, [packs]);

  return (
    <div className={styles.container}>
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          Top Pack Recommendation
        </div>
        <span className={styles.wordItem}>Check out your top picks!</span>

        <div className={styles.package__container} ref={sliderRef}>
          {packs.map((pack) => (
            <div key={pack.id} className={styles.package__item}>
            <img src={pack.img} alt={pack.title} className={styles.pack_img_card} />
            <h3 className={styles.item_title}>{pack.title}</h3>
            
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
