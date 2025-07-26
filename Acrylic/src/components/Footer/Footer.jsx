import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.horizontal}/>

      <div className={styles.footer_contain}>

      <div className={styles.footer_logo}>
        <img className={styles.footer_img} src="/logo_CA.jpg" alt="" />
      </div>

      <div className={styles.footer_sosmed}> 
        <h3>Social Media</h3>
        <p>ikon || instagram</p>
        <p>ikon || Tiktok</p>
        <p>ikon || WhatsApp</p>

      </div>

      <div className={styles.footer_location}>
        <h3>Ikon || (Location)</h3>
        <p>Alamat lengkap</p>

      </div>

      <div className={styles.footer_CA}>
        <h2>Cahaya Acrylic</h2>

      </div>

      </div>
      
      <div className={styles.footerKanan}>
        <p>footer</p>

      </div>
    
    </footer>
  );
}

export default Footer;