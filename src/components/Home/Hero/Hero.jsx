import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./hero.module.css";

function Hero() {
  const slides = [
    {
      id: 1,
      text: (
        <>
          <span className={styles.word1}>ANYTHING YOU WANT</span> ACRYLIC WILL
          <br />
          <span className={styles.word1}>MAKE IT HAPPEN</span>
        </>
      ),
      img1: "/crystal1.png",
      img2: "/crystal2.png",
      link: "https://www.instagram.com/reel/DM4LvtUT2P_/?igsh=MXhqdzluYjQ5Mngxaw==",
    },
    {
      id: 2,
      text: (
        <>
          <span className={styles.word1}>CUSTOM DESIGN</span> WITH BEST QUALITY
          <br />
          <span className={styles.word1}>ACRYLIC MATERIAL</span>
        </>
      ),
      img1: "/crystal1.png",
      img2: "/crystal2.png",
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      text: (
        <>
          <span className={styles.word1}>YOUR IDEA</span> OUR CREATION
          <br />
          <span className={styles.word1}>LET’S MAKE IT REAL</span>
        </>
      ),
      img1: "/crystal1.png",
      img2: "/crystal2.png",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className={styles.hero_container}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className={styles.hero_swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.hero_card}>
              <img className={styles.img_C1} src={slide.img1} alt="crystal1" />
              <div className={styles.hero_content}>
                <h3 className={styles.word_LP}>{slide.text}</h3>
                <button
                  className={styles.buttonVA}
                  onClick={() => window.open(slide.link, "_blank")}
                >
                  View All
                </button>
              </div>
              <img className={styles.img_C2} src={slide.img2} alt="crystal2" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
