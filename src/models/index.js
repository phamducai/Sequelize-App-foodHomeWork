const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql", // hệ CSDL đang sử dụng
});

module.exports = sequelize;
