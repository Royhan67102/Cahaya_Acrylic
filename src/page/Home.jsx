import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import TopPack from '../components/Top_Pack/TopPack';
import TopItem from '../components/Top_Item/TopItem';
import WhatsApp from '../components/WhatsApp/WhatsApp';
import Voucher from '../components/Voucher/Voucher';

function Home() {
  return (
    <div>
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
