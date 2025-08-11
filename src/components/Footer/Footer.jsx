import styles from "./footer.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo_CA}>
           <img className={styles.navbar_logo} src="/logo_CA.jpg" alt="Cahaya Acrylic" /><h3 className={styles.navbar__brand}>Cahaya Acrylic</h3>

        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Jl. Pancasan No.19, Kota Bogor, Jawa Barat (Kantor Utama)</p>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Jl. Ruko Modern Land, Kota Tangerang, Banten (Cabang Tangerang)</p>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <p>+62 812-3456-7890</p>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <p>cahaya@acrylic.com</p>
          </div>
        </div>

        <div className={styles.aboutCompany}>
          <h3>Tentang Kami</h3>
          <p>Cahaya Acrylic adalah tempat terbaik untuk pesanan custom berbahan dasar akrilik seperti keychain, plakat, dan lainnya.</p>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaTiktok />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
