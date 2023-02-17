const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

// like a restaurant
const createLike = async (req, res) => {
  const { user_id, res_id } = req.body;
  try {
    const like = await model.like_res.create({ user_id, res_id });
    res.status(200).send(like);
  } catch (error) {
    res.status(500).json({ message: "Failed to like restaurant" });
  }
};
// unlike a restaurant
const unLike = async (req, res) => {
  const { user_id, res_id } = req.body;

  try {
    const like = await model.like_res.findOne({ where: { user_id, res_id } });

    if (!like) {
      res.status(404).json({ message: "Like not found" });
      console.log("haha");
      return;
    }
    await model.like_res.destroy({ where: { user_id, res_id } });
    res.json({ message: "Successfully unliked restaurant" });
  } catch (error) {
    res.status(500).json({ message: "Failed to unlike restaurant" });
  }
};
// get list of likes by restaurant ID
const getRestaurantsWithLikes = async () => {
  console.log("haha");
  const restaurants = await model.like_res.findAll({
    attributes: [
      "res_id",
      [sequelizes.fn("COUNT", sequelizes.col("user_id")), "number"],
    ],
    include: [
      {
        model: model.restaurant,
        attributes: ["res_name", "image", "desc"],
        as: "like_res",
      },
    ],
    group: [
      "like_res.res_id",
      "restaurant.res_name",
      "restaurant.image",
      "restaurant.desc",
    ],
    order: [
      [sequelizes.fn("COUNT", sequelizes.col("like_res.user_id")), "DESC"],
    ],
  });

  return restaurants.map((restaurant) => ({
    res_id: restaurant.res_id,
    res_name: restaurant.restaurant.res_name,
    image: restaurant.restaurant.image,
    desc: restaurant.restaurant.desc,
    number: restaurant.get("number"),
  }));
};

module.exports = {
  createLike,
  unLike,
  //   likesByRestaurantID,
  getRestaurantsWithLikes,
};
