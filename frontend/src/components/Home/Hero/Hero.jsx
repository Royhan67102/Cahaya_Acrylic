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
          <div className={styles.maps_container}> 
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.330466208772!2d106.79227139999999!3d-6.
               6057939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5bfa4f9cab9%3A0x148f7c322c4a5bea!2sJl.
               %20Pancasan%20No.19%2C%20RT.01%2FRW.07%2C%20Pasir%20Jaya%2C%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20
               Jawa%20Barat%2016119!5e0!3m2!1sen!2sid!4v1756114563706!5m2!1sen!2sid" className={styles.maps}></iframe>
               </div>
        </>
      ),
      img1: "/crystal1.png",
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
    
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      text: (
        <>
          <span className={styles.word1}>YOUR IDEA</span> OUR CREATION
          <br />
          <span className={styles.word1}>LET'S MAKE IT REAL</span>
        </>
      ),
      img1: "/crystal1.png",
   
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className={styles.hero_container}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        className={styles.hero_swiper}
      >
        {slides.map((slide) => (
  <SwiperSlide key={slide.id}>
    <div className={styles.hero_card}>
      <img className={styles.img_C1} src={slide.img1} alt="crystal1" />

      {slide.id === 1 ? (
        <div className={styles.card01}>
          <div className={styles.maps_container}>{slide.text}</div>
          
        </div>
      ) : (
        <div className={styles.hero_content}>
          <h3 className={styles.word_LP}>{slide.text}</h3>
          <button
            className={styles.buttonVA}
            onClick={() => window.open(slide.link, "_blank")}
          >
            View All
          </button>
        </div>
      )}


    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
}

export default Hero;
