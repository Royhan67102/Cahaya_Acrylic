import "swiper/css";
import "swiper/css/pagination";
import styles from "./hero.module.css";
import { Link } from "react-router-dom";

function Hero() {

  return (
    <div className={styles}>
       <section className={styles.keyword}>
        <div className={styles.text}> 
          <h1>
            Custom Acrylic | Kustom Akrilik & Akrilik Custom Sesukamu
          </h1>
          <p>
            Custom Acrylic melayani berbagai kebutuhan custom acrylic seperti
            plakat akrilik, gantungan kunci akrilik, cutting akrilik, hingga
            display akrilik dengan harga terjangkau.
          </p>
          <button className={styles.button}><Link to="/product">Our Product</Link></button>
        </div>
        <div className={styles.image}>
          <img src="/home.jpg" alt="Custom Acrylic" />
        </div>

         <div className={styles.maps_container}> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.330466208772!2d106.79227139999999!3d-6.
              6057939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5bfa4f9cab9%3A0x148f7c322c4a5bea!2sJl.
              %20Pancasan%20No.19%2C%20RT.01%2FRW.07%2C%20Pasir%20Jaya%2C%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20
              Jawa%20Barat%2016119!5e0!3m2!1sen!2sid!4v1756114563706!5m2!1sen!2sid" className={styles.maps}></iframe>
              </div>

            <div>
              <button>Swipe</button>
            </div>
      </section>
      
    </div>
  );
}
export default Hero;