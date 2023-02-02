const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class User extends Model {}

User.init(
  {
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      // field: "user_id"
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email không đúng định dạng",
        },
      },
    },
    pass_word: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User", // => Users
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
