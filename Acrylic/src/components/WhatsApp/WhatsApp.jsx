import { FaWhatsapp } from 'react-icons/fa';
import styles from './Whatsapp.module.css';

function Whatsapp() {
  const phoneNumber = '628889516559'; 
  const message = 'Halo Sayangg, LOVEEE YUUUU';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className={styles.icon} />
      <span>Hubungi Kami </span>
    </a>
  );
}

export default Whatsapp;
