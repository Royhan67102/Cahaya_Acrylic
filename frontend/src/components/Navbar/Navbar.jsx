import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar__brand_container}>
          <img className={styles.navbar_logo} src="/logo_CA.jpg" alt="Custom Acrylic" /><h3 className={styles.navbar__brand}>Custom Acrylic</h3>
          
        </div>
        <div className={styles.navbar__list_container}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link to="/">HOME</Link></li>
                <li className={styles.navbar__item}><Link to="/product">PRODUCT</Link></li>
                <li className={styles.navbar__item}><Link to="/feedback">FEEDBACK</Link></li>
                <li className={styles.navbar__item}><Link to="/blog">BLOG</Link></li>
            </ul>
        </div>
        <div className={styles.navbar__cart_container}>
       
        

</div>

    </nav>

  );
}

export default Navbar