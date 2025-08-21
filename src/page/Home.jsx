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
