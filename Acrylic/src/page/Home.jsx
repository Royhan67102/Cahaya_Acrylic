import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import TopPack from '../components/Top_Pack/TopPack';
import TopItem from '../components/Top_Item/TopItem';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <TopItem />
      <TopPack /> 
      <Footer />

    </div>
  );
}

export default Home;
