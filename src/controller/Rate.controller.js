// Import Sequelize and initialize the models
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const addRate = async (req, res) => {
  const { res_id, user_id, amount } = req.body;
  try {
    const [dataFind] = await Promise.all([
      model.rate_res.findOne({ where: { res_id, user_id } }),
    ]);
    if (dataFind) {
      return res.status(400).json({ message: "Rate already exists" });
    }
    await model.rate_res.create({ res_id, user_id, amount });
    res.status(200).json({ message: "Rate created successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getRestaurantsWithRate = async (req, res) => {
  try {
    const data = await model.restaurant.findAll({
      include: ["user_id_user_rate_res"],
    });
    res.send(data);
  } catch (error) {
    throw new Error();
  }
};
const getUSersWithRate = async (req, res) => {
  try {
    const data = await model.user.findAll({
      include: ["res_id_restaurant_rate_res"],
    });
    res.send(data);
  } catch (error) {
    throw new Error();
  }
};

module.exports = { addRate, getRestaurantsWithRate, getUSersWithRate };
