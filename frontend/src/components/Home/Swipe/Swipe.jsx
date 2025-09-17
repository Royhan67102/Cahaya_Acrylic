import { useState, useEffect } from "react";
import styles from "./swipe.module.css";
import { Link } from "react-router-dom";

function Swipe() {
  const [showMap, setShowMap] = useState(false);

  // Detect swipe di HP
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endY = e.changedTouches[0].clientY;
      if (startY - endY > 50) {
        setShowMap(true); // swipe up
      } else if (endY - startY > 50) {
        setShowMap(false); // swipe down
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Detect scroll di Laptop/PC
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        setShowMap(true); // scroll down
      } else if (e.deltaY < -50) {
        setShowMap(false); // scroll up
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={`${styles.section} ${!showMap ? styles.active : ""}`}>
        <div className={styles.heroContent}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Custom Acrylic | Kustom Akrilik & Akrilik Custom Sesukamu
            </h1>
            <p className={styles.desc}>
              Custom Acrylic melayani berbagai kebutuhan custom acrylic seperti plakat akrilik, gantungan kunci akrilik, cutting akrilik, hingga display akrilik dengan harga terjangkau.
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.button}>
                <Link to="/product">Our Product</Link>
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <img src="/proses.jpg" alt="Custom Acrylic" className={styles.cardImg} />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={`${styles.section} ${showMap ? styles.active : ""}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.290863173441!2d106.7922153!3d-6.6057824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5000c67b3d7%3A0x4614f6e7e3267fc7!2sCahaya%20Acrylic%20(Cutting%20Laser%2C%20Custom%20Akrilik%2C%20Akrilik%20Lembaran)!5e0!3m2!1sid!2sid!4v1694640000000!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
        ></iframe>
      </div>
    </div>
  );
}

export default Swipe;
