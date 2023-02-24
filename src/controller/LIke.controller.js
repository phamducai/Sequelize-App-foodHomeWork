// Import Sequelize and initialize the models
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const likeStatusRes = async (req, res) => {
  try {
    // Extract the res_id and user_id from the request body
    const { res_id, user_id } = req.body;
    const [dataFind] = await Promise.all([
      model.like_res.findOne({ where: { res_id, user_id } }),
    ]);

    if (dataFind) {
      // If the user has already liked the restaurant, remove their like
      await model.like_res.destroy({ where: { user_id, res_id } });
      res.status(200).send("Bạn đã DISLIKE");
    }
    // If the user has not yet liked the restaurant, add their like
    await model.like_res.create({ user_id, res_id });
    res.status(200).send("BẠN ĐÃ LIKE");
  } catch (error) {
    // Handle errors by sending a generic error message
    throw new Error();
  }
};

// Retrieve a list of restaurants with their associated user data
// Note: consider caching the result of this function using a caching library like Redis
const getRestaurantsWithLikes = async (req, res) => {
  try {
    const data = await model.restaurant.findAll({
      include: ["user_id_users"],
    });
    res.send(data);
  } catch (error) {
    throw new Error();
  }
};
// Retrieve a list of users with their associated liked restaurants
const getUsersWithLikes = async (req, res) => {
  try {
    const data = await model.user.findAll({ include: ["res_id_restaurants"] });
    res.send(data);
  } catch (error) {
    throw new Error();
  }
};

// Export the functions for use in other modules
module.exports = {
  likeStatusRes,
  getRestaurantsWithLikes,
  getUsersWithLikes,
};
