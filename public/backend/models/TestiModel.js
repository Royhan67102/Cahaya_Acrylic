import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Testi = db.define("testi", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kota: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {  // ✅ Tambahkan kolom rating
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  freezeTableName: true,
});

export default Testi;
