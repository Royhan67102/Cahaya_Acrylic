import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";     // karena masih dalam folder Product
import Products from "./Products/Products"; // sama juga, tinggal ./Products/Products
import styles from "./Produk.module.css";   // kalau ada css khusus untuk Produk.jsx

function Produk() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className={styles.container}>
      <Sidebar onSelectCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default Produk;
