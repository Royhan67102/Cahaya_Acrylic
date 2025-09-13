import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero/Hero";
import TopItem from "../components/Home/Top_Item/TopItem";
import Voucher from "../components/Home/Voucher/Voucher";
// import TopPack from "../components/Home/Top_Pack/TopPack";
import WhatsApp from "../components/Home/WhatsApp/WhatsApp";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Service from "../components/Home/Service/Service";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Custom Acrylic | Akrilik Custom, Cutting Acrylic</title>
        <meta
          name="description"
          content="Cahaya Acrylic menjual berbagai jenis akrilik: akrilik bening, warna, dan custom dengan harga terbaik untuk kebutuhan rumah, kantor, dan dekorasi."
        />
        <meta
          name="keywords"
          content="cahaya acrylic, jual akrilik, akrilik bening, akrilik custom, harga akrilik murah, acrylic custom, custom acrylic, akrilik custom, custom akrilik, akrilik, acrylic, akrilik bogor, akrilik terdekat, plakat akrilik, jual akrilik, toko akrilik, toko acrylic, cutting acrylic, cutting akrilik, akrilik cutting, gantungan kunci, gantungan kunci acrylic, gantungan kunci akrilik"
        />
        <meta
          property="og:title"
          content="Cahaya Acrylic | Akrilik Custom, Cutting Acrylic"
        />
        <meta
          property="og:description"
          content="Tempat jual akrilik terpercaya: bening, warna, dan custom dengan harga terbaik. Hanya di Cahaya Acrylic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cahaya-acrylic.com/" />
      </Helmet>

      <Navbar />
      <Hero />

      {/* Section Keyword */}
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
      </section>
      <Service />
      <TopItem />
      <Voucher />
      {/* <TopPack /> */}
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default Home;