const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const Sequelize = require("sequelize");
const model = initModels(sequelize);

const { like_res, restaurant } = model;

const test = async (req, res) => {
  const data = await like_res.findAll({
    attributes: [
      "res_id",
      [Sequelize.fn("COUNT", Sequelize.col("user_id")), "number"],
    ],
    include: [
      {
        model: restaurant,
        as: "re", // Add the alias here
        attributes: ["res_name", "image", "desc"],
      },
    ],
    group: ["like_res.res_id", "re.res_id"], // Use the alias here
    order: [[Sequelize.fn("COUNT", Sequelize.col("user_id")), "DESC"]],
  });
  res.send(data);
};
module.exports = { test };
