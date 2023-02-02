const User = require("../models/user");

const getUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findAll({
    where: {
      user_id: id,
    },
  });
  let dataOne = await User.findOne({
    where: {
      user_id: id,
    },
  });
  res.send(dataOne);
};

const createUser = async (req, res) => {
  res.send("Create User");
};

module.exports = {
  getUser,
  createUser,
};
