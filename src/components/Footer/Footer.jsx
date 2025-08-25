import styles from "./footer.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";

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
            <p>admincahaya@acrylic.com</p>
          </div>
        </div>

        <div className={styles.aboutCompany}>
          <h3>Tentang Kami</h3>
          <p>Cahaya Acrylic adalah tempat terbaik untuk pesanan custom berbahan dasar akrilik seperti keychain, plakat, dan lainnya.</p>
          <div className={styles.socialIcons}>
            <a
            href="https://www.instagram.com/cahaya.acrylic?igsh=MWh6a2RtbHMwaTY3ag=="
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaInstagram />
            </a>

            <a
            href="https://www.tiktok.com/@cahayaacrylic?_t=ZS-8zATG3DVRJ3&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaTiktok />
            </a>

            <a
            href="https://wa.me/628118840838"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaWhatsapp />
            </a>

            <a
            href="https://www.facebook.com/share/1AuwykwgDB/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaFacebook />
            </a>
        </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
