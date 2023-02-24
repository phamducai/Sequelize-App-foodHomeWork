const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const OrderFood = async (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;
  let data = await model.order.findOne({
    where: { user_id, food_id },
  });

  if (data) {
    // Update existing order
    const updatedData = await model.order.update(
      { amount },
      {
        where: { user_id, food_id },
      }
    );

    res.send(updatedData);
  } else {
    // Create new order
    const flag =
      (await model.user.findOne({
        where: { user_id },
      })) &&
      (await model.food.findOne({
        where: { food_id },
      }));
    console.log(flag);
    if (flag) {
      const newOrder = await model.order.create({
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
      });

      res.send(newOrder);
    } else {
      return res.status(400).send("user or food not found ");
    }
  }
};

module.exports = { OrderFood };
