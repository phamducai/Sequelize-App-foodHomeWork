const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const getFood = async (req, res) => {
  let data = await model.user.findAll();
  res.send(data);
};
module.exports = {
  getFood,
};
