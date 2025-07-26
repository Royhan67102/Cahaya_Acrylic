import styles from "./hero.module.css";

function Hero () {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_card}>
        <img className={styles.img_C1} src="/crystal1.png" alt="crystal1" />
        <div className={styles.hero_content}>
          <h3 className={styles.word_LP}>
            <span className={styles.word1}>ANYTHING YOU WANT</span> ACRYLIC WILL
            <br />
            <span className={styles.word1}>MAKE IT HAPPEN</span>
          </h3>
          <button className={styles.buttonVA}>View All</button>
        </div>
        <img className={styles.img_C2} src="/crystal2.png" alt="crystal2" />
      </div>
    </div>
  );
}

export default Hero;