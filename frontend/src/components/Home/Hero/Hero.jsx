import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import styles from "./hero.module.css";
import { useState } from "react";
import { ChevronUp, ChevronDown, Star } from "lucide-react";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: "hero",
      title: "Because Email Is Complicated Enough.🔥",
      desc: "Try Email Finder. Build your leads database faster with Snov.io Email Finder. Start using for free.",
      img: "/home.jpg",
    },
    {
      id: 2,
      type: "map",
      title: "Find Us Easily",
      desc: "Our office is located at the heart of the city. Come and visit us!",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.569585239693!2d106.82715387475106!3d-6.186486693801057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d59a91a8c7%3A0x3027a76e352bd70!2sJakarta!5e0!3m2!1sen!2sid!4v1693560000000!5m2!1sen!2sid",
    },
  ];

  return (
    <div className={styles.hero_container}>
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        mousewheel={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.type === "hero" ? (
              <section className={styles.hero_card}>
                {/* Text */}
                <div className={styles.text}>
                  {/* Rating */}
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className={styles.starIcon} />
                    ))}
                    <span className={styles.starText}>5.0 Star</span>
                    <span className={styles.reviewCount}>(1.2M+ Reviews)</span>
                  </div>

                  {/* Title */}
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>

                  {/* Buttons */}
                  <div className={styles.btn_group}>
                    <a href="#" className={styles.appstoreBtn}>
                      <img src="/appstore.svg" alt="App Store" />
                      App Store
                    </a>
                    <button className={styles.demoBtn}>▶ Watch Demo</button>
                  </div>

                  {/* Statistik */}
                  <div className={styles.statistic}>
                    <div className={styles.statistic_item}>
                      <div className={styles.stat_number}>20M+</div>
                      <div className={styles.stat_label}>
                        Satisfied users all over the world
                      </div>
                    </div>
                    <div className={styles.statistic_item}>
                      <div className={styles.stat_number}>120+</div>
                      <div className={styles.stat_label}>
                        Companies collaborate with customers
                      </div>
                    </div>
                    <div className={styles.statistic_item}>
                      <div className={styles.stat_number}>80+</div>
                      <div className={styles.stat_label}>
                        Integrations & Developers
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={styles.image}>
                  <div className={styles.imageCircle}></div>
                  <img src={slide.img} alt="Hero Person" />
                  <div className={styles.starDecor1}>★</div>
                  <div className={styles.starDecor2}>★</div>
                </div>
              </section>
            ) : slide.type === "map" ? (
              <section className={styles.map_card}>
                <div className={styles.map_text}>
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                </div>
                <div className={styles.map_wrapper}>
                  <iframe
                    src={slide.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "16px" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </section>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Shape bawah */}
      <div className={styles.bottomShape}>
        <svg
          width="100%"
          height="70"
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            d="M0,0 Q360,70 720,70 Q1080,70 1440,0 V70 H0 Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Chevron indikator */}
      <div className={styles.chevron}>
        {activeIndex === 0 ? (
          <ChevronDown size={36} color="#23403a" />
        ) : (
          <ChevronUp size={36} />
        )}
      </div>
    </div>
  );
}

export default Hero;