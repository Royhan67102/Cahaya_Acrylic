import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Home/Hero/Hero';
import TopItem from '../components/Home/Top_Item/TopItem';
import Voucher from '../components/Home/Voucher/Voucher';
import TopPack from '../components/Home/Top_Pack/TopPack';
import WhatsApp from '../components/Home/WhatsApp/WhatsApp';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Cahaya Acrylic | Jual Akrilik Murah & Custom</title>
        <meta
          name="description"
          content="Cahaya Acrylic menjual berbagai jenis akrilik: akrilik bening, warna, dan custom dengan harga terbaik untuk kebutuhan rumah, kantor, dan dekorasi."
        />
        <meta
          name="keywords"
          content="cahaya acrylic, jual akrilik, akrilik bening, akrilik custom, harga akrilik murah"
        />
        <meta property="og:title" content="Cahaya Acrylic | Jual Akrilik Murah & Custom" />
        <meta
          property="og:description"
          content="Tempat jual akrilik terpercaya: bening, warna, dan custom dengan harga terbaik. Hanya di Cahaya Acrylic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cahaya-acrylic.com/" />
      </Helmet>

      <Navbar />
      <Hero /> 
      <TopItem />
      <Voucher />
      <TopPack /> 
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default Home;