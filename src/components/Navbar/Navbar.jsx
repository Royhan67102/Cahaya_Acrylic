import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar__brand_container}>
          <img className={styles.navbar_logo} src="/logo_CA.jpg" alt="Cahaya Acrylic" /><h3 className={styles.navbar__brand}>Cahaya Acrylic</h3>
          
        </div>
        <div className={styles.navbar__list_container}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link to="/">HOME</Link></li>
                <li className={styles.navbar__item}><Link to="/">PRODUCT</Link></li>
                <li className={styles.navbar__item}><Link to="/">FEEDBACK</Link></li>
            </ul>
        </div>
        <div className={styles.navbar__cart_container}>
          <button className={styles.navbar__cart_btn}>Cart</button>
        </div>
    </nav>

  );
}

export default Navbar