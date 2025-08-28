import { Sequelize } from "sequelize";

const db = new Sequelize("cahaya_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
