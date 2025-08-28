import { Sequelize } from "sequelize";

const db = new Sequelize("cahaya_db", "root", "cahaya123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
